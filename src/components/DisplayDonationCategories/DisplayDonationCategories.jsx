import DisplayDonationCategoriesCard from "./DisplayDonationCategoriesCard";


const DisplayDonationCategories = ({ categories, searchText, filteredCategories }) => {
    console.log(categories, searchText,filteredCategories )
    return (
        <div className="mx-32 my-28">
           
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    categories?.map(category => <DisplayDonationCategoriesCard key={category.id} category={category}></DisplayDonationCategoriesCard>)
                }
            </div>
        </div>
    );
};

export default DisplayDonationCategories;