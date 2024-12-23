import Button from "../button/Button"

function CartItem() {
  return (
    <div className="flex flex-row-reverse p-6 shadow-inner border m-2 rounded">
        <img src="/11.jpg" className="w-3/12 rounded "alt="" />
        <div>

        <h3 className="m-4">عنوان محصول</h3>
        <Button variant="primary">+</Button>
        <span>تعداد</span>
        <Button variant="primary">-</Button>
        <Button variant="danger">delete</Button>

        </div>
    </div>
  )
}

export default CartItem