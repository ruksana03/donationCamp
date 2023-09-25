
import { Link } from "react-router-dom";
const AllDonationCard = ({ donation }) => {
    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_color, description, price } = donation || {}
    // console.log(donation);
    return (

        <div style={{ backgroundColor: card_bg }} className="flex rounded-lg gap-6">
            <img src={view_image} className="" />
            <div className="flex flex-col gap-3 pb-3">
                <h2 className="btn w-1/2 text-sm font-medium text-center rounded-lg px-6 py-2 mt-6" style={{ backgroundColor: card_category_bg, color: text_color }}>{card_category}</h2>
                <p className="text-2xl font-semibold">{title}</p>
                <p className="text-base font-semibold">${price}</p>
                <Link to={`/category-details/${id}`}>
                    <button style={{backgroundColor: text_color}} className="btn text-white text-xl font-semibold">View Details</button>
                </Link>
            </div>
        </div>



    );
};

export default AllDonationCard;