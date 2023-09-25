
import { Link } from "react-router-dom";
const AllDonationCard = ({ donation }) => {
    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_button_bg, description, price } = donation || {}
    // console.log(donation);
    return (
        <div className="">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={view_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{card_category}</h1>
                        <p className="py-6">{title}</p>
                        <p className="py-6">${price}</p>
                        <Link to={`/category-details/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
             
             
        </div >
    );
};

export default AllDonationCard;