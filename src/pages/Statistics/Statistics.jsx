import { useLoaderData } from "react-router-dom";


const Statistics = ({totalDonation}) => {
    console.log(totalDonation)

    const alldata = useLoaderData()
    console.log(alldata.price);
    return (
        <div>
            <h1>My Donetion: </h1>
        </div>
    );
};

export default Statistics;