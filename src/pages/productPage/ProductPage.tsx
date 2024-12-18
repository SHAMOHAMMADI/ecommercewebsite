import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function ProductPage() {
  const params = useParams();

  const [productItems, setProductItems] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5174/data${params}`).then((res) => {
      setProductItems(res.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow-inner bg-blue-50 mx-6 rounded h-auto border ">
          <div className=" col-span-8  text-right p-4 ">
            <h3>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای
            </h3>
            <div>price </div>
          </div>
          <div className="col-span-4  flex justify-center items-center pr-2 flex-col border ">
            <img src="/11.jpg" alt="" className="rounded my-4" />
            <Button
              onClick={() => alert("added to the basket")}
              variant="danger"
            >
              Add to cart
            </Button>

            <Button variant="primary">
             add to cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
