import { useEffect, useState } from "react";
import AllDonationCard from "../../components/AllDonation/AllDonationCard";
import Calculation from "../../components/Calculation/Calculation";



const Donation = () => {
    const [donations, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    const [totalDonation, setTotalDonation] = useState(0)

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donation"));
        if (donatedItems) {
            // console.log(donatedItems);
            setDonation(donatedItems);

            const sum = donatedItems.reduce((preValue, currentValue) => preValue + currentValue.price, 0)
            console.log(sum)
            setTotalDonation(sum);


        } else { setNoFound("No Data Found!!!") }
    }, []);
    // console.log(donations);

    const handleRemoveAllLocalData = () => {
        localStorage.clear();
        setDonation([]);
        setNoFound("No Data Found !!!");
    };


    return (
        <div className="mx-32 mb-28">
            {/* Create card for each Donation  */}
            <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
                {
                    isShow ? donations.map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>)) : donations.slice(0, 4).map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>))
                }
            </div>

            {/* see more and see less button  */}
            <div className="flex justify-center items-center  ">
                {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="text-white bg-[#009444] my-6  py-2 px-4 rounded-lg">
                    {isShow ? "See less" : "See more"}
                </button>}
            </div>

            
                <div>{noFound ? (<p style={{ background: '-webkit-linear-gradient(left, #4A90E2, #FF4B2B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="h-[80vh] flex justify-center items-center text-6xl font-extrabold ">{noFound}</p>
                ) : (
                    <div>
                        {
                            donations.length > 0 && (
                                <div className=" mt-8 flex justify-center">
                                    <button onClick={handleRemoveAllLocalData} className="btn btn-warning text-black text-lg font-medium">Delete all Donated Data</button>
                                </div>
                            )
                        } </div>) }


                </div>
          
        </div>
    );
};

export default Donation;