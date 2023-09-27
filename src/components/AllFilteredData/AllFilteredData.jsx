import { useLoaderData, useLocation } from "react-router-dom";
import AllFilteredDataCard from "./AllFilteredDataCard";
import { useEffect, useState } from "react";


const AllFilteredData = () => {
    const totalData = useLoaderData();
    const location = useLocation()
    const text = new URLSearchParams(location.search).get("searchText");
    console.log(text);

    const allDataCategories = totalData.map(item => item.card_category);
    console.log(allDataCategories);

    const [displayFilteredData, setDisplayFilteredData] = useState([]);
    const [noDataFound, setDataNoFound] = useState(false);

    const handlefilter = () => {
        const dataFiltered = totalData.filter((item) =>
            item.card_category.toLowerCase().includes(text.toLowerCase())
        );
        setDisplayFilteredData(dataFiltered);
    };

    useEffect(() => {
        handlefilter();
    }, [text]);

    useEffect(() => {
        // Check if there is no data after filtering or if the input text is empty
        if (displayFilteredData.length === 0 || !text) {
          setDataNoFound(true);
        } else {
          setDataNoFound(false);
        }
      }, [displayFilteredData, text]);
      


    console.log("filtered data:", displayFilteredData)
    console.log(" AllData:", totalData);
    return (
        <div className="mx-32 my-28">
            {noDataFound ? (
                <p style={{ background: '-webkit-linear-gradient(left, #4A90E2, #FF4B2B, #FFD034)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="h-[80vh] flex justify-center items-center text-6xl font-extrabold ">No data found.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                    {displayFilteredData?.map((displayData) => (
                        <AllFilteredDataCard
                            key={displayData.id}
                            displayData={displayData}
                        ></AllFilteredDataCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllFilteredData;