import { useLoaderData } from "react-router-dom";
import Calculation from "../../components/Calculation/Calculation";


const Statistics = () => {


    const alldata = useLoaderData()
    // console.log(alldata);
    return (
        <div>
            <Calculation alldata ={alldata}></Calculation>
        </div>
    );
};

export default Statistics;