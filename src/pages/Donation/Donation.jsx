import { useEffect, useState } from "react";
import AllDonationCard from "../../components/AllDonation/AllDonationCard";



const Donation = () => {
    const [donations, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donation"));
        if (donatedItems) {
            // console.log(donatedItems);
            setDonation(donatedItems);
        } else { setNoFound("no data found") }
    }, []);
    console.log(donations);


    return (
        <div>
            <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-5 mx-32 mt-20">
                {
                    isShow ? donations.map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>)) : donations.slice(0, 4).map((donation) => (<AllDonationCard key={donation.id} donation={donation}></AllDonationCard>))
                }
            </div>
            <div className="flex justify-center items-center ">
                {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="text-white bg-[#009444] my-20  py-2 px-4 rounded-lg">
                    {isShow ? "See less" : "See more"}
                </button>}
            </div>
        </div>
    );
};

export default Donation;