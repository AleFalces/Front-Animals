import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { postProduct } from "../../../Redux/Actions";
import UploadImage from "./UploadImage";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select, Icon,
  Container,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { MdArrowBackIosNew } from "react-icons/md";

export default function FormPostProduct() {
  const dispatch = useDispatch();

  const imageUrl = useSelector((state) => state.imageUrl)
  const [image, setImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    description: "",
    Category: "",
    image: "",
    price: 0,
    stock: 0,
  });

  useEffect(()=>{
    setInput({
      ...input,
      image: imageUrl
    })
  },[imageUrl])

  // useEffect(()=>{
  //   // console.log("soy el useEFFECT",input)
  // },[input])

  const errors = {
    name: "",
    description: "",
    Category: "",
    image: "",
    price: 0,
    stock: 0,
  };

  function handlerErrors(e) {
    e.preventDefault();

    if (input.name === "") {
      errors.name = "Ingresá el nombre del producto.";
    }
    if (input.description === "") {
      errors.description = "¡Se debe agregar una descripcion del producto!";
    }
    if (input.Category === "") {
      errors.Category = "Falta elegir la categoría.";
    }
    if (input.image === "") {
      errors.image = "Selecciona una imagen.";
    }
    if (input.price < 0) {
      errors.price = "Los numeros de precios no deben ser negativos.";
    }
    if (input.stock < 0) {
      errors.stock = "No se puede pasar stock con numero negativo.";
    }
    if (
      !errors.name &&
      !errors.description &&
      !errors.Category &&
      !errors.image &&
      !errors.price &&
      !errors.stock
    ) {
      
      handlerSubmit(e);
    } else {
      alert("Falta rellenar algun campo");
    }
  }

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
    console.log("input", input);
    // console.log("error", errors);
  }

  function handlerSubmit(e) {
    // e.preventDefault();
    setInput({
      ...input,
    })
    dispatch(postProduct(input));
    // console.log("EXISTEE", input)
    setInput({
      name: "",
      description: "",
      Category: "",
      image: "",
      price: 0,
      stock: 0,
    });
    
    document.getElementById("myForm").reset();
    alert("Producto agregado a la tienda.");
  }

  return (
  <Box>
      <form id="myForm">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"brand.green.100"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Añadir producto a la tienda
              </Heading>
            </Stack>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="name" isRequired>
                      <FormLabel>Nombre: </FormLabel>
                      <Input
                        placeholder="¿Que vas a vender?"
                        type="text"
                        name="name"
                        onChange={(e) => handlerChange(e)}
                      />
                      {errors.name && <Text>{errors.name}</Text>}
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="price" isRequired>
                      <FormLabel>Precio: $</FormLabel>
                      <Input
                        placeholder="¿Cuanto cuesta?"
                        name="price"
                        type="number"
                        key="price"
                        onChange={(e) => handlerChange(e)}
                      />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl id="Category" isRequired>
                  <Select
                    name="Category"
                    key="Category"
                    onChange={(e) => handlerChange(e)}
                  >
                    <option value="default" key="defaultCategory">
                      Categoria del producto
                    </option>
                    <option value="indumentaria" key="indumentaria">
                      Indumentaria
                    </option>
                    <option value="tazas" key="tazas">
                      Tazas
                    </option>
                    <option value="alimentos" key="alimentos">
                      Alimentos
                    </option>
                    <option value="otros" key="otros">
                      Otros
                    </option>
                  </Select>
                </FormControl>

                <FormControl id="stock" isRequired>
                  <FormLabel>Stock: </FormLabel>
                  <Input
                    placeholder="Cantidad disponible"
                    name="stock"
                    key="stock"
                    type="number"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Descripcion: </FormLabel>
                  <Input
                    placeholder="Algún comentario sobre el producto"
                    name="description"
                    key="description"
                    type="text"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="image" isRequired>
                <Container>
                    <h1>Imagen del producto</h1>
                  </Container>
                  <button>
                    <UploadImage image={image} setImage={setImage} />
                  </button>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={(e) => handlerErrors(e)}
                    loadingText="Publicar el producto"
                    fontFamily={"body"}
                    size="lg"
                    bg={"orange.300"}
                    color={"white"}
                    _hover={{
                      bg: "orange.400",
                    }}>
                    Publicar producto
                  </Button>
                </Stack>
              </Stack>
            </Box>


            <Link to={"/dashboard"}>
							<Icon
								as={MdArrowBackIosNew}
								color="orange.400"
								boxSize={5}
								_hover={{
									color: "grey",
									boxSize: "7",
								}}
							/>
							<Icon
								as={MdArrowBackIosNew}
								color="orange.400"
								boxSize={5}
								_hover={{
									color: "grey",
									boxSize: "7",
								}}
							/>
							<Button
								fontFamily={"body"}
								bg="base.green.100"
								color={"grey"}
								_hover={{
									color: "orange.400",
								}}
								p="0"
								mr="1rem">
								{" "}
								Atrás
							</Button>
						</Link>
          </Stack>
        </Flex>
      </form>
    </Box>
  );
}
