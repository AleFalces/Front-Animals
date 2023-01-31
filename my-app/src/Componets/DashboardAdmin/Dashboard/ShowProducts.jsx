import React from "react";
import { useSelector } from "react-redux";


const ShowProducts = () => {
  const products = useSelector((state) => state.allProducts);
  console.log("Productos", products)

  return (
    <div>
        {products?.map((pro)=> (
            <>{pro.name}</>
        ))}
    </div>
  );
};

export default ShowProducts;
