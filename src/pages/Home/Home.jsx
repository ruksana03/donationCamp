import Banner from "../../components/Header/Banner/Banner";
import DisplayDonationCategories from "../../components/DisplayDonationCategories/DisplayDonationCategories";
import { useLoaderData } from "react-router-dom";




const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div>
           
            <div className=" ">
            <Banner></Banner>
            </div>
            <div className="my-32">
            <DisplayDonationCategories categories={categories}></DisplayDonationCategories>
           </div>
           
            
        </div>
    );
};

export default Home;