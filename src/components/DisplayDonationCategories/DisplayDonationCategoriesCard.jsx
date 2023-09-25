import { Link } from "react-router-dom";

const DisplayDonationCategoriesCard = ({ category }) => {
    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_color, description, price } = category || {};

    console.log("card_bg:", card_bg);

    const cardBgClass = `bg-${card_bg}`;
    console.log("cardBgClass:", cardBgClass);

    return (
        <div className={`rounded-lg bg-opacity-90`}
        style={{ backgroundColor: card_bg }}> {/* Use curly braces to interpolate the class name */}
            <Link to={`/category-details/${id}`}>
                <div className="rounded-full">
                    <figure><img className="w-full h-1/2 " src={picture} alt={title} /></figure>
                    <div className="my-4 pl-4">
                        <h2 className="text-sm font-medium w-1/3 text-center rounded-lg px-3 py-2" style={{ backgroundColor: card_category_bg, color:text_color }}>{card_category}</h2>
                        <p className="text-xl font-semibold" style={{color:text_color }}>{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayDonationCategoriesCard;

