import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryDetailsCard from "./CategoryDetailsCard";

const CategoryDetails = () => {
    const [categoryDetail, setCategoryDetail] = useState({});
    const { id } = useParams();
    const categoryId = parseInt(id);
    const categoryDetails = useLoaderData();
    // console.log(categoryDetails);

    useEffect(() => {
        if (categoryDetails) {
            const findCategory = categoryDetails.find((categorydetail) => categorydetail.id === categoryId);
            setCategoryDetail(findCategory || {});
            // console.log(findCategory);
        }
    }, [id, categoryDetails]);

    console.log(categoryDetail);

    return (
        <div>
            <CategoryDetailsCard categoryDetail={categoryDetail}></CategoryDetailsCard>
        </div>
    );
};

export default CategoryDetails;
