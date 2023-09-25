import { Link } from "react-router-dom";

const DisplayDonationCategoriesCard = ({ category }) => {
    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_button_bg, description, price } = category || {};

    console.log("card_bg:", card_bg);

    const cardBgClass = `bg-[${card_bg}]`;
    console.log("cardBgClass:", cardBgClass);

    return (
        <div className={cardBgClass}> {/* Use curly braces to interpolate the class name */}
            <Link to={`/category-details/${id}`}>
                <div className="card card-compact shadow-xl">
                    <figure><img src={view_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card_category}</h2>
                        <p>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayDonationCategoriesCard;
