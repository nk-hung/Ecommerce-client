import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import "./productItem.scss";

const ProductItem = ({ item }: any) => {
  return (
    <div className='product_container'>
      <img src={item.img} alt='picture_product' className='img_product' />
      <div className='price'>Price: ${item.price ? item.price : 5.99}</div>
      <div className='info_product'>
        <div className='icon'>
          <ShoppingCartOutlined className='style_icon' />
        </div>
        <div className='icon'>
          <SearchOutlined className='style_icon' />
        </div>
        <div className='icon'>
          <HeartOutlined className='style_icon' />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
