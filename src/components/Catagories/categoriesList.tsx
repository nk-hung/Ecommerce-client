import { useState } from "react";
import { categories } from "../data";

import "./categoriesList.scss";
import CategoryItem from "./Item/categoryItem";
const CategoriesList = () => {
  const [categoriesList, setCategoriesList] = useState(categories);
  return (
    <div className='cate_container'>
      {categoriesList.map((item, idx) => (
        <CategoryItem item={item} key={idx} />
      ))}
    </div>
  );
};

export default CategoriesList;
