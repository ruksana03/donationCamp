import { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";


const Calculation = ({ alldata }) => {

  console.log(alldata)
  const [allLocalData, setAllLocalData] = useState([]);
  const [emptyLocal, setEmptyLocal] = useState(false);

  const [donatedSum, setDonatedSum] = useState(0);
  const [sumOfTotalDonation, setSumOfTotalDonation] = useState(0);
  const [donatedPercentage, setDonatedPercentage] = useState(0);
  const [remainingPercentage, setRemainingPercentage] = useState(0);

  const [chartData, setChartData] = useState({});
  const updateChartData = () => {
    setChartData({
      labels: ["Donated Percentage", "Remaining Percentage"],
      datasets: [
        {
          data: [donatedPercentage, remainingPercentage],
          backgroundColor: ["#FF5733", "#36A2EB"],
        },
      ],
    });
  };


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("donation"));
    if (localData) {

      console.log(localData);
      setAllLocalData(localData);

      const totalDonatedSum = localData.reduce((preSum, currentSum) => preSum + currentSum.price, 0);
      const totalDonationSum = alldata.reduce((predonationSum, currentDonationSum) => predonationSum + currentDonationSum.price, 0);
      const percentageOfDonated = (totalDonatedSum / totalDonationSum * 100).toFixed(2);
      const parcentageRemaining = (100 - percentageOfDonated).toFixed(2);


      console.log(parcentageRemaining);
      console.log(percentageOfDonated);
      console.log(totalDonatedSum);
      console.log(totalDonationSum);

      setSumOfTotalDonation(totalDonationSum);
      setDonatedSum(totalDonatedSum);
      setDonatedPercentage(percentageOfDonated);
      setRemainingPercentage(parcentageRemaining);

      updateChartData();
    }
  }, [donatedPercentage, remainingPercentage, alldata]);



  return (
    <div>
      <h1>Donated :{allLocalData.length} Category</h1>
      <h1>My Total Donation Amount: ${donatedSum}</h1>
      <h1>Total Donation Amount: ${sumOfTotalDonation}</h1>
      <h1>Total Donated Percentage: {donatedPercentage} %</h1>
      <h1>Remaining Percentage: {remainingPercentage} %</h1>

      <div>
        <Pie data={chartData} options={{ responsive: true }}></Pie>
      </div>

    </div>
  );
};

export default Calculation;
