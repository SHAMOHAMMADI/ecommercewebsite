import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { IProducts } from "../../types/ServerTypes";

function SearchPage() {
  const [data, setData] = useState<IProducts[]>();
   
  const [query , setQuery] = useState<string >()
  useEffect(() => {
    getProducts().then((res) => {
      setData(res);
    });
  }, []);

  console.log(query)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {data?.filter((title)=> title.title.toLowerCase().includes(query)).map((res) => (
          <div
            key={res.id}
            className=" w-full border flex flex-col justify-center items-center rounded "
          >
            <img src={res?.image} alt="no image" className="w-36 h-48 flex" />
            <div className="flex flex-col justify-center items-center text-center ">
              <h5 className="bg-slate-200 p-4">{res.title}</h5>
              <h5 className="line-clamp-2">{res.description}</h5>
              <h5>{res.price}</h5>
              <h5>{res.rating.count}</h5>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center mx-auto">

      <input
        type="text"
        placeholder="search ..."
        className="flex w-full border justify-center items-center mx-auto outline-none"
        onChange={(e)=>{setQuery(e.target.value)}}
        />
        </div>
    </div>
  );
}

export default SearchPage;
