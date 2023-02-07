import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  shopSearchInputName,
  shopFilterValue,
  getAllProducts,
} from "../../../Redux/Actions";

import {
  Box,
  Heading,
  Center,
  Input,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ShopNavbar({ handlerSetCart, handleRemoveItemCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const inputSearch = document.getElementById("inputSearch");

  const handlerInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handlerClickSearch = (e) => {
    e.preventDefault(e);
    if (input.trim() !== "") {
      dispatch(shopSearchInputName(input.trim()));
      inputSearch.value = "";
    } else {
      inputSearch.value = "";
    }
  };

  const handlerShopFilterValue = (e) => {
    e.preventDefault();
    e.target.value !== "todos"
      ? dispatch(shopFilterValue(e.target.value))
      : dispatch(getAllProducts());
  };

  function handlerClick(e) {
    e.preventDefault();
    setTimeout(() => navigate("/shop/cart"), 500);
  }

  return (
    <>
      <Box bg={"brand.green.200"} pt="1rem">
        <Center>
          <Heading>Productos Solidarios</Heading>
        </Center>
      </Box>
      <Box bg={"brand.green.200"} h={"30vh"} alignItems={"center"}>
        <Center>
          <Box padding={5}>
            {" "}
            <Icon
              as={AiOutlineShoppingCart}
              w={10}
              h={10}
              color="orange.300"
              _hover={{
                color: "orange.400",
              }}
              onClick={(e) => {
                handlerClick(e);
              }}
            />
          </Box>

          <Box
            w="50%"
            mt={["2rem", "2rem", "3rem"]}
            mr={["0rem", "0rem", "1rem"]}
            ml={["0rem", "6rem", "0"]}
          >
            <Input
              id="inputSearch"
              variant="filled"
              bg={"white"}
              focusBorderColor={"brand.green.300"}
              type="text"
              borderRadius={"full"}
              onChange={(e) => handlerInputChange(e)}
              placeholder="Buscar producto..."
            />
          </Box>

          <Box mt={["2rem", "2rem", "3rem"]} ml={["1rem", "1rem", "1rem"]}>
            <Button
              onClick={(e) => handlerClickSearch(e)}
              fontFamily={"body"}
              borderRadius={"full"}
              size="md"
              bg={"brand.green.300"}
              color={"white"}
              _hover={{
                bg: "brand.green.100",
              }}
            >
              Buscar
            </Button>
          </Box>
        </Center>

        <Center py={5}>
          <SimpleGrid
            w="70%"
            my={["1rem", "1rem", "1rem"]}
            columns={[2, 3, 5]}
            spacing="4px"
          >
            <Center>
              <Button
                value="alimentos"
                onClick={(e) => handlerShopFilterValue(e)}
                fontFamily={"body"}
                borderRadius={"full"}
                size="md"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                Alimentos
              </Button>
            </Center>
            <Center>
              <Button
                value="tazas"
                onClick={(e) => handlerShopFilterValue(e)}
                fontFamily={"body"}
                borderRadius={"full"}
                size="md"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                Tazas
              </Button>
            </Center>
            <Center>
              <Button
                value="indumentaria"
                onClick={(e) => handlerShopFilterValue(e)}
                fontFamily={"body"}
                borderRadius={"full"}
                size="md"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                Indumentaria
              </Button>
            </Center>
            <Center>
              <Button
                value="otros"
                onClick={(e) => handlerShopFilterValue(e)}
                fontFamily={"body"}
                borderRadius={"full"}
                size="md"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                Otros
              </Button>
            </Center>
            <Center>
              <Button
                value="todos"
                onClick={(e) => handlerShopFilterValue(e)}
                fontFamily={"body"}
                borderRadius={"full"}
                size="md"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
              >
                Todos
              </Button>
            </Center>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}
