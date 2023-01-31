import React from "react";
import { useSelector } from "react-redux";


const ShowProducts = () => {
  const products = useSelector((state) => state.allProducts);
  // console.log("Productos", product)

  return (
    <div>
        {products.map((pro)=> (
            <>{pro? pro.name : "No hay productos"}</>
        ))}
    </div>
  );
};

export default ShowProducts;
