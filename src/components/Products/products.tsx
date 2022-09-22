import { useState } from "react";
import { popularProducts } from "../data";
import ProductItem from "./item/productItem";
import "./products.scss";

const Products = () => {
  const [products, setProducts] = useState(popularProducts);
  return (
    <div className='prd_container'>
      {products.map((item, idx) => (
        <ProductItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default Products;
