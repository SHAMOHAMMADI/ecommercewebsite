// import React from 'react'
import { useContext, useState } from "react";
import Container from "../container/Container";
import { Link, useNavigate, } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import SearchPage from "../../pages/searchPage/SearchPage";

function Navbar() {
  const { cartQty, handleLogOut, handleLogin } = useShoppingCartContext();
  const [query , setQuery] = useState<string>()
  console.log(query)

  const navigate = useNavigate()
  const search = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value)
    navigate("/searchpage")
  }

  return (
    <div className="flex flex-row-reverse   w-11/12 border h-24 my-4 shadow-inner rounded-lg px-4 mx-auto  ">
      <ul className="flex flex-row-reverse  [&>*]:px-2 ] w-10/12 m-auto text-center  [&>*]:ml-8 hover:[&>*]:bg-blue-600 hover:[&>*]:text-white hover:[&>*]:rounded-md [&>*]:duration-500 ">
        <li>
          <Link to="/"> خانه</Link>
        </li>
        <li>
          <Link to="/store">فروشگاه</Link>
        </li>
        <li >
          <Link to="/searchPage">search</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center ms-2">

      <input className="outline-none border h-12 rounded shadow-inner " type="text" placeholder="search ..." onChange={search} />
      </div>
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
