import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productPage/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Layout>
  );
}

export default App;
