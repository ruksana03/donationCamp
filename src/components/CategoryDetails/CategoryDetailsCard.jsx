

const CategoryDetailsCard = ({ categoryDetail }) => {
    // console.log(categoryDetail);

    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_button_bg, description, price } = categoryDetail || {}

    const handleAddDonations = () => {
        const addDonationsArray = [];
        const donationItems = JSON.parse(localStorage.getItem("donation"));
    
        if (!donationItems) {
            addDonationsArray.push(categoryDetail);
            localStorage.setItem("donation", JSON.stringify(addDonationsArray));
            alert("ok!!!");
        } else {
            const isExist = donationItems.find((donation) => donation.id === categoryDetail.id);
    
            if (!isExist) {
                addDonationsArray.push(...donationItems, categoryDetail);
                localStorage.setItem("donation", JSON.stringify(addDonationsArray));
                alert("ok!!!");
            } else {
                alert("no!!!");
            }
        }
    }
    

    return (
        <div className="flex justify-around items-center w-full">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt={title} /></figure>
                <button onClick={handleAddDonations} className="btn">Donate ${price}</button>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailsCard;