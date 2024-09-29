import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import CheckoutDetail from "./Pages/CheckoutDetail/CheckoutDetail";
import ProductCategory from "./Pages/ProductCategory/ProductCategory";
import OrderPlaced from "./Pages/OrderPlaced/OrderPlaced";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import TermsOfServices from "./Pages/TermsOfServices/TermsOfServices";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Error from "./Components/Error/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/category/:category" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-detail" element={<CheckoutDetail />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-services" element={<TermsOfServices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
