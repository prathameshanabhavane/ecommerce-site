import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import CheckoutDetail from "./Pages/CheckoutDetail/CheckoutDetail";
import ProductCategory from "./Pages/ProductCategory/ProductCategory";
import Error from "./Components/Error/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/category/:category" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-detail" element={<CheckoutDetail />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
