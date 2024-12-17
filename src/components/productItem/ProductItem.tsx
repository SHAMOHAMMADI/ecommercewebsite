import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductItem() {


  return (
    <Container>
   
      <div className=" shadow border rounded-lg">
        <img src="/10.jpg" alt="" className="w-full rounded-lg " />
        <div className="flex flex-col p-2">
          <h3 className="text-right">عنوان محصول</h3>
          <p className="text-justify p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis a
            maxime sed eveniet cumque aut molestias cupiditate incidunt illum
            dolores?
          </p>
          <span className="text-left">55$</span>
        </div>
      </div>
    </Container>
  );
}

export default ProductItem;
