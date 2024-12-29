import Container from "../container/Container";
import { IProducts } from "../../types/ServerTypes";
import Button from "../button/Button";


type TProductItem = IProducts


function ProductItem({  title ,price ,description ,category ,image ,rating}:TProductItem) {


  return (
    <Container>
   
      <div className="flex flex-col p-4 justify-center items-center   shadow border rounded-lg  h-[700px] mb-6">
        <img src={image} alt="" className="w-9/12 m-2 h-[400px] rounded-lg " />
        <div className="flex flex-col p-2 text-center ">

          
            <h3>{title}</h3>
          <h3 className="text-center p-2">{category}</h3>
          <p className="text-justify p-6 line-clamp-3 m-2">
            {description}
          </p>
         <Button variant="danger">{price}</Button>
          <div className="flex justify-evenly">

          <span>{rating.count}</span>
          <span>{rating.rate}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductItem;
