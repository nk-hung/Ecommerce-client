import "./App.css";
import Home from "./components/Home/home";
import Login from "./pages/Login/login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/cart";

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
