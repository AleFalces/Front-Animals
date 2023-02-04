import React from "react";
import ProductCard from "./Cards/ProductCard";

export default function ShowProduct({ products }) {
  return (products.map((product) => (
    <ProductCard
      id={product.id}
      name={product.name}
      image={product.image}
      stock={product.stock}
      price={product.price}
      Category={product.Category}
      description={product.description}
    ></ProductCard>
    )
    ));
}
