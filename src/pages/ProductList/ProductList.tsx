import { Select } from "antd";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Newsletter from "../../components/Newsletter/newsletter";
import Products from "../../components/Products/products";
import "./ProductList.scss";

const { Option } = Select;
const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className='filter'>
        <h3 className='title'>Dresses</h3>
        <div className='filter_container'>
          <div className='filter_wrapper'>
            <div className='filter_text'>Fitler Products:</div>
            <Select defaultValue={"disabled"} style={{ width: 100 }}>
              <Option value='disabled' disabled>
                Color
              </Option>
              <Option value='Jack'>Jack</Option>
              <Option value='Fack'>Fack</Option>
              <Option value='Shark'>Shark</Option>
              <Option value='Track'>Track</Option>
            </Select>
            <Select defaultValue={"disabled"} style={{ width: 80 }}>
              <Option value='disabled' disabled>
                Size
              </Option>
              <Option value='S'>S</Option>
              <Option value='M'>M</Option>
              <Option value='L'>L</Option>
              <Option value='XL'>XL</Option>
            </Select>
          </div>
          <div className='filter_wrapper'>
            <div className='filter_text'>Sort Products:</div>
            <div>
              <Select defaultValue={"Newest"} style={{ width: 120 }}>
                <Option value='Newest' disabled>
                  Newest
                </Option>
                <Option value='Price(asc)'>Price(asc)</Option>
                <Option value='Price(desc)'>Price(desc)</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
