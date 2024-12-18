import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"

function Cart() {
  return (
    <div>
        <Container>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

        </Container>
    </div>
  )
}

export default Cart