import { useEffect, useState } from "react";

import React, { PureComponent } from 'react';
import { PieChart, Pie, Label, Cell, ResponsiveContainer, Sector } from 'recharts';
import DonationPieChart from "./DonationPieChart";


const Calculation = ({ alldata }) => {

  // console.log(alldata)
  const [allLocalData, setAllLocalData] = useState([]);
  const [emptyLocal, setEmptyLocal] = useState(false);

  const [donatedSum, setDonatedSum] = useState(0);
  const [sumOfTotalDonation, setSumOfTotalDonation] = useState(0);
  const [donatedPercentage, setDonatedPercentage] = useState(0);
  const [remainingPercentage, setRemainingPercentage] = useState(0);


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("donation"));
    if (localData) {

      // console.log(localData);
      setAllLocalData(localData);

      const totalDonatedSum = localData.reduce((preSum, currentSum) => preSum + currentSum.price, 0);
      const totalDonationSum = alldata.reduce((predonationSum, currentDonationSum) => predonationSum + currentDonationSum.price, 0);
      const percentageOfDonated = (totalDonatedSum / totalDonationSum * 100).toFixed(2);
      const parcentageRemaining = (100 - percentageOfDonated).toFixed(2);


      // console.log(parcentageRemaining);
      // console.log(percentageOfDonated);
      // console.log(totalDonatedSum);
      // console.log(totalDonationSum);

      setSumOfTotalDonation(totalDonationSum);
      setDonatedSum(totalDonatedSum);
      setDonatedPercentage(percentageOfDonated);
      setRemainingPercentage(parcentageRemaining);

    } else { setEmptyLocal("No Data Found !!!") }
  }, [donatedPercentage, remainingPercentage, alldata]);

  const data = [
    { name: 'Total Donation', value: parseFloat(remainingPercentage) },
    { name: 'Your Donation', value: parseFloat(donatedPercentage) },
  ];

  // console.log(data)

  const COLORS = ['#FF444A', '#00C49F'];


  return (
    <div className="flex flex-col justify-center items-center text-center"> {emptyLocal ? (<p style={{ background: '-webkit-linear-gradient(left, #4A90E2, #FF4B2B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="h-[80vh] flex justify-center items-center text-6xl font-extrabold ">{emptyLocal}</p>) : (
      //  if data available 

      <div>
        {/* <div>
         <h1>Donated :{allLocalData.length} Category</h1>
        <h1>My Total Donation Amount: ${donatedSum}</h1>
        <h1>Total Donation Amount: ${sumOfTotalDonation}</h1>
        <h1>Total Donated Percentage: {donatedPercentage} %</h1>
        <h1>Remaining Percentage: {remainingPercentage} %</h1>
       </div> */}
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                // label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-around items-center gap-4" >
          <p className="text-lg font-normal">Your Donation</p>
          <p className="bg-[#00C49F] w-24 h-3"></p>
          <p className="text-lg font-normal">Total Donation</p>
          <p className="bg-[#FF444A] w-24 h-3"></p>
        </div>

      </div>)}


    </div>
  );
};


export default Calculation;
