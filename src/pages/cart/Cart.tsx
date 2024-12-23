import { useContext } from "react"
import Button from "../../components/button/Button"
import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import { ShoppingCartContext, useShoppingCartContext } from "../../context/ShoppingCartContext"

function Cart() {

  // const {cartItems} = useContext(ShoppingCartContext)
   const {cartItems} = useShoppingCartContext();
  return (
    <div>
        <Container>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          <div className="bg-gray-50 shadow-inner border rounded text-right p-2 px-6 m-6">
            <p>قیمت کل : 1000</p>
            <p>تخفیف شما : 200</p>
            <p>قیمت نهایی : 800</p>
            <div className="text-left">

          <Button variant="success" className="">ثبت سفارش</Button>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Cart