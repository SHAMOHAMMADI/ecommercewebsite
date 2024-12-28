// import React from 'react'
import { useContext } from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function Navbar() {
  const { cartQty, handleLogOut, handleLogin } = useShoppingCartContext();
  return (
    <div className="flex flex-row-reverse w-11/12 border h-24 my-4 shadow-inner rounded-lg px-4 mx-auto  ">
      <ul className="flex flex-row-reverse [&>*]:p-2 ] w-10/12 m-auto [&>*]:px-4  [&>*]:ml-8 hover:[&>*]:bg-blue-600 hover:[&>*]:text-white hover:[&>*]:rounded-md [&>*]:duration-500 ">
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link to="/store">فروشگاه</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center hover:bg-blue-600 px-2 shadow-inner border duration-500 my-6 rounded hover:text-white">
        <Link to="/cart">
          <button className="relative w-10 flex justify-center">
            <SlBasket />
            <p className="bg-red-600 rounded-full h-6 w-6 absolute -top-4 left-8 text-white shadow-md border">
              {cartQty !== 0 ? cartQty : ""}
            </p>
          </button>
        </Link>
      </div>
      <button
        className="border shadow-inner my-6 px-4 mx-2 rounded duration-700 hover:bg-blue-600 hover:text-white"
        onClick={() => handleLogOut()}
      >
        خروج
      </button>
    </div>
  );
}

export default Navbar;
