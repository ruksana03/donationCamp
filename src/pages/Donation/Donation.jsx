import { useEffect, useState } from "react";
import AllDonationCard from "../../components/AllDonation/AllDonationCard";
import Statistics from "../Statistics/Statistics";



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


        } else { setNoFound("no data found") }
    }, []);
    console.log(donations);

    const handleRemoveAllLocalData = () => {
        localStorage.clear();
        setDonation([]);
        setNoFound("No Data Found");
    };


    return (
        <div className="mx-32">
           <div className=" flex justify-between">
           <button className="btn btn-info text-white text-lg font-medium">My Donation ${totalDonation}</button>
            <div>{noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    {
                        donations.length > 0 && (
                            <div>
                                <button onClick={handleRemoveAllLocalData} className="btn btn-warning text-white text-lg font-medium">Delete all Donated Data</button>
                            </div>
                        )
                    } </div>)
            }


            </div>
           </div>
            <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
                {
                    isShow ? donations.map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>)) : donations.slice(0, 4).map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>))
                }
            </div>
            <div className="flex justify-center items-center mb-12 ">
                {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="text-white bg-[#009444] my-20  py-2 px-4 rounded-lg">
                    {isShow ? "See less" : "See more"}
                </button>}
            </div>
        </div>
    );
};

export default Donation;