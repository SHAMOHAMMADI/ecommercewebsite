import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { IProducts } from "../../types/ServerTypes";
import { getProduct, getProducts } from "../../services/api";
import axios from "axios";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function ProductPage() {
  const params = useParams<{ id:string }>();

  const [productItems, setProductItems] = useState<IProducts>();

  const {handleIncreaseProductQty , cartItems } = useShoppingCartContext();

  useEffect(() => {
   getProduct(params.id as string ).then(result=>{
    setProductItems(result)
})

}, []);
console.log(cartItems)

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow-inner bg-blue-50 m-2 mb-4 rounded h-auto border">
          <div className=" col-span-8  text-right p-4 ">
            <h3>
                {productItems?.description}
            </h3>
            <div>{productItems?.price}</div>
          </div>
          <div className="col-span-4  flex justify-center items-center pr-2 flex-col border ">
            <img src={productItems?.image} alt="" className="rounded my-4" />
            <Button
              onClick={() => alert("added to the basket")}
              variant="danger"
            >
              Add to cart
            </Button>

            <Button onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))} variant="primary" >
             add to cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
