// import React from 'react'
import Container from "../container/Container";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <div className="flex flex-row-reverse w-full border-b h-20 my-4  shadow-inner rounded-lg px-4 ">
        <ul className="flex flex-row-reverse [&>*]:p-2 ] w-10/12 m-auto [&>*]:px-4  [&>*]:ml-8 hover:[&>*]:bg-blue-600 hover:[&>*]:text-white hover:[&>*]:rounded-md ">
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/store">فروشگاه</Link>
          </li>
     
        </ul>
        <div className="flex hover:">
          <button>سبد خرید</button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
