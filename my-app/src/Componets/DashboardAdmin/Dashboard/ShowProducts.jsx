import React from "react";
import ProductCard from "./Cards/ProductCard";
import { SimpleGrid, Center } from "@chakra-ui/react";

export default function ShowProduct({ products }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='40px' >
      {products.map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          image={product.image}
          stock={product.stock}
          price={product.price}
          Category={product.Category}
          description={product.description}
        ></ProductCard>

      ))}
    </SimpleGrid>
  );
}


