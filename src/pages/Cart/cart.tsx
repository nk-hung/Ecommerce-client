import { useState } from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Newsletter from "../../components/Newsletter/newsletter";
import "./cart.scss";

const Cart = () => {
  const [cart, useCart] = useState();
  return (
    <div className='cart_container'>
      <Navbar />
      <Announcement />
      <div className='cart_wrapper'>
        <h1 className='title'>YOUR CART</h1>
        <div className='top_cart'></div>
        <div className='bottom_cart'></div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
