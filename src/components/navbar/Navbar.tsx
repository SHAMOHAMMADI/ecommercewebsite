// import React from 'react'
import Container from "../container/Container";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   
      <div className="flex flex-row-reverse w-11/12 border h-24 my-4 shadow-inner rounded-lg px-4 mx-auto  ">
        <ul className="flex flex-row-reverse [&>*]:p-2 ] w-10/12 m-auto [&>*]:px-4  [&>*]:ml-8 hover:[&>*]:bg-blue-600 hover:[&>*]:text-white hover:[&>*]:rounded-md ">
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/store">فروشگاه</Link>
          </li>
     
        </ul>
        <div className="flex justify-center items-center hover:bg-[#2b2bfc] px-2 shadow-inner border my-4 rounded hover:text-white">
            <Link to="/cart">
            
          <button>سبد خرید</button>
            </Link>
        </div>
      </div>
   
  );
}

export default Navbar;
