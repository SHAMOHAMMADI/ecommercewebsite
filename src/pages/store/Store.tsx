import ProductItem from "../../components/productItem/ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Links } from "react-router-dom";

function Store() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:5174/data").then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <div className=" mx-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid ">
        <Link to={`/productpage/${1}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${2}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${3}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${4}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${5}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${6}`}>
      <ProductItem />
      </Link>
      <Link to={`/productpage/${7}`}>
      <ProductItem />
      </Link>
    </div>
  );
}

export default Store;
