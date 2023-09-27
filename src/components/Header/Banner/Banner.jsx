import { useState } from "react";

import { Link } from "react-router-dom";


const Banner = () => {
    const [searchText, setSearchText] = useState('');
 
    const handleSearch = () => {
        setSearchText('');
    };

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
                        <Link to={`/filtered?searchText=${searchText}`}>
                        <button
                            className="absolute right-0 top-0 z-10 select-none rounded-r-lg bg-[#FF444A] py-2 px-4 text-center align-middle text-base font-semibold text-white transition-all hover:shadow-lg"
                            type="button"
                            data-ripple-light="true"
                            onClick={handleSearch}>
                            Search
                        </button>
                        </Link>
                        
                    </div>
            </div>
          
        </div >
    );
};

export default Banner;