import { useEffect, useState } from "react";
import AllFilteredData from "../../AllFilteredData/AllFilteredData";
import DisplayDonationCategories from "../../DisplayDonationCategories/DisplayDonationCategories";
import Home from "../../../pages/Home/Home";
import { Link } from "react-router-dom";
import AllDonationCard from "../../AllDonation/AllDonationCard";

const Banner = () => {
    const [searchText, setSearchText] = useState('');
    const [allData, setAllData] = useState([]);
    const [displayFilteredData, setDisplayFilteredData] = useState([]);



    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data));
    }, []);

    const allDataCategories = allData.map(item => item.card_category);


    const handleSearch = () => {
        const filteredData = allData.filter((item) =>
            item.card_category.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayFilteredData(filteredData);
        setAllData([]); // Clear the original data
        setSearchText('');
    };

    console.log("displayFilteredData in Banner:", displayFilteredData);

    return (
        <div>
            <div className="relative flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-center my-8">I Grow By Helping People In Need</h2>
        
                    <div className="relative flex h-10 w-full min-w-[30%] max-w-[50%] my-12">
                        <input
                            type="text"
                            className="h-full w-full rounded-lg border border-[#DEDEDE] bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200"
                            placeholder="Search here...."
                            required
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            className="absolute right-0 top-0 z-10 select-none rounded-r-lg bg-[#FF444A] py-2 px-4 text-center align-middle text-base font-semibold text-white transition-all hover:shadow-lg"
                            type="button"
                            data-ripple-light="true"
                            onClick={handleSearch}>
                            Search
                        </button>
                        
                    </div>
            </div>
        </div >
    );
};

export default Banner;
