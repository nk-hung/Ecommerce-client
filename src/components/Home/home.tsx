import Announcement from "../Announcement";
import CategoriesList from "../Catagories/categoriesList";
import Footer from "../Footer/footer";
import GoogleMap from "../GoogleMap/googleMap";
import Navbar from "../Navbar/navbar";
import Newsletter from "../Newsletter/newsletter";
import Products from "../Products/products";
import Slider from "../Silder";

const Home = () => {
  return (
    <div className='home_container'>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoriesList />
      <Products />
      <Newsletter />
      <Footer />
      {/* <GoogleMap /> */}
    </div>
  );
};

export default Home;
