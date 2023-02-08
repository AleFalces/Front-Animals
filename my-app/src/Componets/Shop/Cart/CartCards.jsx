import { Flex } from "@chakra-ui/layout";
import { Button, Text, Center, SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./Product";

export default function CartCards({
  amount,
  id,
  image,
  name,
  price,
  total,
  stock,
  handlerSetCart,
  handleRemoveItemCart,
}) {
  return (
    <>
      <Center>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          justify="space-between"
          align="center"
          flexWrap={"wrap"}
        >
          <Box>
            <Product
              name={name}
              stock={stock}
              image={image}
              amount={amount}
              price={price}
            />
          </Box>
          <Box>
            <Box>
              <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                // bg={"brand.orange"}
                // color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={(e) => handleRemoveItemCart(e, id)}
              >
                -
              </Button>
              <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                // bg={"brand.orange"}
                // color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={(e) =>
                  handlerSetCart(e, id, price, image, name, stock, price)
                }
              >
                +
              </Button>
            </Box>

            <Text>${total}</Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
}
