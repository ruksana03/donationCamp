


import DisplayDonationCategories from "../../components/DisplayDonationCategories/DisplayDonationCategories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <div className="my-32">
                <DisplayDonationCategories categories={categories}></DisplayDonationCategories>
            </div>
        </div>
    );
};

export default Home;
