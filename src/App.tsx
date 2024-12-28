import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
  useShoppingCartContext,
} from "./context/ShoppingCartContext";
import { useState } from "react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {
  // const [cartItems, setCartItems] = useState([]);
  const {isLogin} = useShoppingCartContext()
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/store" element={<Store />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/login" element={ isLogin ? <Navigate to="/" /> : <Login/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>
  );
}

export default App;
