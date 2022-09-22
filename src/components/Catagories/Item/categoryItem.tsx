import "./categoryItem.scss";

const CategoryItem = ({ item }: any) => {
  console.log(item);
  return (
    <div className='cate_item_container'>
      <img src={item.img} alt='pic\ture' className='img_ctg' />
      <div className='info'>
        <div className='title'>{item.title}</div>
        <button className='btn_info'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
