import React from "react";
import ProductCard from "./Cards/ProductCard";
import { SimpleGrid, Center, Container } from "@chakra-ui/react";

export default function ShowProduct({ products }) {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing='10px' >
      {products.map((product) => (
      <Container>
        <ProductCard
          id={product.id}
          name={product.name}
          image={product.image}
          stock={product.stock}
          price={product.price}
          Category={product.Category}
          description={product.description}
        ></ProductCard>
</Container>
      ))}
    </SimpleGrid>
  );
}


