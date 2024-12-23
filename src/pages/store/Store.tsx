import ProductItem from "../../components/productItem/ProductItem";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { getProducts } from "../../services/api";
import Container from "../../components/container/Container";
import { IProducts } from "../../types/ServerTypes";

function Store() {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
   getProducts().then(result=>{
    setProducts(result)
   })

    
  }, []);

  return (
    <Container>
    <div className=" mx-6  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:grid-cols-2 lg:grid ">
        {products.map((re)=>(
            <Link key={re.id} to={`/productpage/${re.id}`}>
      <ProductItem  {...re}/>
      </Link>
        ))}
    </div>
        </Container>
  );
}

export default Store;
