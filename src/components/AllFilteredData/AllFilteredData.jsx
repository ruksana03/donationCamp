import AllFilteredDataCard from "./AllFilteredDataCard";


const AllFilteredData = ({ displayFilteredData }) => {
    // console.log("displayFilteredData in AllFilteredData:", displayFilteredData);
    return (
        <div className="mx-32 my-28">
           
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {
              displayFilteredData?.map(displayData => <AllFilteredDataCard key={displayData.id} displayData={displayData}></AllFilteredDataCard>)
            }
        </div>
    </div>
    );
};

export default AllFilteredData;