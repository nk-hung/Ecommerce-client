import { Select } from "antd";
import React, { useState } from "react";
import Announcement from "../../components/Announcement";
import { popularProducts } from "../../components/data";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Newsletter from "../../components/Newsletter/newsletter";
import "./Product.scss";

const { Option } = Select;
const Product = () => {
  const [product, setProduct] = useState(popularProducts);
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className='product_wrapper'>
        <div className='img_product'>
          <img src={product[0].img} className='img' alt='pic' />
        </div>
        <div className='info_wrapper'>
          <div className='title'>{"Title"}</div>
          <div className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            dicta nemo veniam, unde placeat reiciendis iste. Voluptates,
            molestias aperiam autem explicabo vero sit, reprehenderit quaerat
            voluptate praesentium, quod nesciunt ex!
          </div>
          <div className='price'>Price: $20</div>
          <div className='filter_container'>
            <div className='filter'>
              <div className='color_title'>Color:</div>
              <div className='filter_color'>Gray</div>
              <div className='filter_color'>Blue</div>
              <div className='filter_color'>Yellow</div>
              <div className='filter_color'>Black</div>
            </div>
            <div className='filter'>
              <Select defaultValue={"size"} style={{ width: 80 }}>
                <Option value='size' disabled>
                  Size:
                </Option>
                <Option value='S'>S</Option>
                <Option value='M'>M</Option>
                <Option value='L'>L</Option>
                <Option value='SL'>SL</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
