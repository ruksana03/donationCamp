import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const CategoryDetailsCard = ({ categoryDetail }) => {
    // console.log(categoryDetail);

    const { id, picture, view_image, title, card_category, card_category_bg, card_bg, text_color, description, price } = categoryDetail || {}

    const handleAddDonations = () => {
        const addDonationsArray = [];
        const donationItems = JSON.parse(localStorage.getItem("donation"));
        const notify = () => toast("Wow so easy!");

        if (!donationItems) {
            addDonationsArray.push(categoryDetail);
            localStorage.setItem("donation", JSON.stringify(addDonationsArray));
            toast.success("Successfully Donated!!!!!")
        } else {
            const isExist = donationItems.find((donation) => donation.id === categoryDetail.id);

            if (!isExist) {
                addDonationsArray.push(...donationItems, categoryDetail);
                localStorage.setItem("donation", JSON.stringify(addDonationsArray));
                toast.success('Successfully Donated!!!!!')
            } else {
                toast.error("You Donated Already Here!!!!")
            }
        }
    }


    return (
        <div className="flex flex-col justify-center align-middle mx-32 mb-24 mt-8 min-h-screen">
            <div>
                {/* Your application content */}
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            </div>
            <img src={picture} alt="" />
            <div className=" lg:bg-black h-24 shadow-black-2xl -mt-24 opacity-50"></div>
            <button onClick={handleAddDonations} className="btn border-none md:w-2/3 lg:w-1/6 mx-9 text-xl font-semibold text-white py-4 rounded-lg -mt-20 z-0" style={{ backgroundColor: text_color }}>Donate ${price}</button>
            <h1 className="text-4xl font-bold mt-12">{title}</h1>
            <p className="text-base font-normal mt-6 ">{description}</p>
        </div>
    );
};

export default CategoryDetailsCard;