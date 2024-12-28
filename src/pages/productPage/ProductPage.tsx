import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { IProducts } from "../../types/ServerTypes";
import { getProduct, getProducts } from "../../services/api";
import axios from "axios";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { FaRegTrashAlt } from "react-icons/fa";

function ProductPage() {
  const params = useParams<{ id: string }>();

  const [productItems, setProductItems] = useState<IProducts>();

  const {
    handleIncreaseProductQty,
    cartItems,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProductItems(result);
    });
  }, []);
  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow-inner  m-2 mb-4 rounded h-auto border">
          <div className=" col-span-8  text-right p-4 ">
            <h3>{productItems?.description}</h3>
            <div>{productItems?.price}</div>
          </div>
          <div className="col-span-4  flex justify-center items-center pr-2 flex-col border ">
            <img src={productItems?.image} alt="" className="rounded my-4 w-48" />

            { getProductQty(parseInt(params.id as string)) == 0 ? (
              <div className="">
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                }
                variant="primary"
                >
                  خرید
                </Button>
              </div>
            ) : (
                <div className="flex flex-col w-8/12">
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                }
                
                variant="primary"
                >
                  <p className="font-extrabold">+</p>
                </Button>
                <span className="flex justify-center">{getProductQty(parseInt(params.id as string))}</span>
                <Button
                  onClick={() => {
                      handleDecreaseProductQty(parseInt(params.id as string));
                    }}
                    variant="primary"
                    >
                    <p className="font-extrabold">-</p>

                </Button>
                <div className="flex justify-center items-center max-w-full ">

                <Button onClick={()=>handleRemoveProduct(parseInt(params.id as string))} variant="danger"><FaRegTrashAlt className="flex justify-center items-center w-full " /></Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
