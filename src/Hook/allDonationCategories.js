import { useEffect, useState } from "react";


const allDonationCategories = () => {

    const [donationCategories,setDonationCategories] = useState()

    useEffect(()=>{

        fetch('/data.json')
        .then(res=>res.json())
        .then(data =>setDonationCategories(data))

    },[])
    

    return [donationCategories]

};

export default allDonationCategories;