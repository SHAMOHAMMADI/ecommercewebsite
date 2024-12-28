import { useEffect, useState } from "react"
import Button from "../button/Button"
import { getProduct } from "../../services/api"
import { IProducts } from "../../types/ServerTypes"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import { FaRegTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


interface ICartItem {
    id: number,
    qty:number
}
function CartItem({id , qty}:ICartItem) {

  useEffect(()=>{
   getProduct(id).then((data)=>{
    setProduct(data)
   })
  },[])
  const {getProductQty ,handleDecreaseProductQty , handleIncreaseProductQty , handleRemoveProduct} = useShoppingCartContext()

  const [product , setProduct] = useState<IProducts>()

  return (
    <div className="flex p-6 shadow-inner border m-2 rounded">
        
        

        <h3 className="m-4">{product?.description}</h3>
        <div className=" flex flex-col justify-center  items-center pr-2  w-64  ">
          <Link to={`/productPage/${id}`}>
            <img src={product?.image} alt="" className="rounded my-4 w-54" />
          </Link>

            { getProductQty(id) == 0 ? (
              <div className="">
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(id)
                }
                variant="primary"
                >
                  خرید
                </Button>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center ">
              <Button
                onClick={() =>
                  handleIncreaseProductQty(id)
              }
              
              variant="primary"
              >
                <p className="font-extrabold">+</p>
              </Button>
              <span className="flex justify-center  w-4/12">{getProductQty(id)}</span>
              <Button
                onClick={() => {
                    handleDecreaseProductQty(id);
                  }}
                  variant="primary"
                  >
                  <p className="font-extrabold">-</p>

              </Button>
              <div className="flex  justify-center items-center  ">

              <Button onClick={()=>handleRemoveProduct(id)} variant="danger"><FaRegTrashAlt className="flex justify-center items-center w-full " /></Button>
              </div>
            </div>
            )}
              </div>
            

        </div>
    
  )
}

export default CartItem