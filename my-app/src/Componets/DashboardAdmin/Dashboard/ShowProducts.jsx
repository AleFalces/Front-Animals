import React, { useEffect } from "react";
import ProductCard from "./Cards/ProductCard";
import { SimpleGrid, Stack, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../Redux/Actions";

export default function ShowProduct({ products }) {
  const dispatch = useDispatch()
  // console.log("PRODUCTS QUE LLEGAN",products)
  const products2 = useSelector((state) => state.allProducts)
  // console.log("PRODUCTS", products2)

  // useEffect(()=>{
  //   dispatch(getAllProducts())
  // },[])

  useEffect(()=>{
   
  },[products2])

  return (
    <Stack spacing="25px">
      <Box bg={"#bae8e8"} maxW="7xl" mx={"auto"} pt={2} px={{ base: 2, sm: 12, md: 17 }} borderRadius="20px"
      color={"blackAlpha.700"}
      fontWeight={700}
      alignItems={"center"}
      lineHeight={1.0}
      fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      textAlign={"center"}
      justifyContent={"center"}
      
      >Productos de la tienda
      </Box>
    <SimpleGrid columns={[1, 1, 2, 3]} spacing='10px' >
      {products?.map((product, idx) => (
        <ProductCard
        id={product.id}
        name={product.name}
        image={product.image}
        stock={product.stock}
        price={product.price}
        Category={product.Category}
        description={product.description}
        key={idx}
        ></ProductCard>
      ))}
    </SimpleGrid>
        </Stack>
  );
}


