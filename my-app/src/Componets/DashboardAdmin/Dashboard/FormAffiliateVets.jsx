import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postVet } from "../../../Redux/Actions";
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
  useColorModeValue, Icon,
  Select,
  Container
} from "@chakra-ui/react";


import { MdArrowBackIosNew } from "react-icons/md";

export default function FormAffiliateVets() {
  const dispatch = useDispatch();

  const imageUrl = useSelector((state) => state.imageUrl)
  const [image, setImage] = useState("")
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
    location: [],
  });

  const errors = {
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
    location: [],
  };

  useEffect(()=>{
    setInput({
      ...input,
      image: imageUrl
    })
  },[imageUrl])

  function handlerErrors(e) {
    e.preventDefault();

    if (input.name === "") {
      errors.name = "Ingresar el nombre de Veterinaria";
    }
    if (input.description === "") {
      errors.description = "Dejar un comentario sobre algo";
    }
    if (input.image === "") {
      errors.image = "Seleccionar una imagen.";
    }
    if (input.phone === "") {
      errors.price = "Ingresar su teléfono";
    }
    if (input.address === "") {
      errors.stock = "Escribir la ubicación de la Veterinaria";
    }
    if (input.email === "") {
      errors.stock = "Agregar un email de contacto";
    }
    if (
      !errors.name &&
      !errors.description &&
      !errors.image &&
      !errors.phone &&
      !errors.address &&
      !errors.email
    ) {
      handlerSubmit(e);
    } else {
      alert("Falta rellenar algun campo.");
    }
  }

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
    console.log("input", input);
    console.log("error", errors);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    let result = input.location.split(", ");
    let finalResult = [Number(result[0]), Number(result[1])];

    setInput({
      ...input,
      location: (input.location = finalResult),
    });
    console.log(input);
    dispatch(postVet(input));
    setInput({
      name: "",
      description: "",
      phone: "",
      address: "",
      image: "",
      email: "",
      location: [],
    });

    document.getElementById("myForm").reset();
    alert("Veterinaria afiliada exitosamente.");
  }

  return (
    <div>
      <form id="myForm">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"brand.green.100"}>
        
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Afiliar una Veterinaria
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
                      <FormLabel>Veterinaria: </FormLabel>
                      <Input
                        placeholder="¿Cómo se llama?" //el input name solo acepta palabras sin espacios!!.
                        type="text"
                        name="name"
                        onChange={(e) => handlerChange(e)}
                      />
                      {errors.name && <Text>{errors.name}</Text>}
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="description">
                      <FormLabel>Descripción: </FormLabel>
                      <Input
                        placeholder="Algún comentario sobre la afiliación..."
                        name="description"
                        type="text"
                        key="description"
                        onChange={(e) => handlerChange(e)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="phone" isRequired>
                  <FormLabel>Teléfono de contacto: </FormLabel>
                  <Input
                    placeholder="Fijo/Celular"
                    name="phone"
                    key="phone"
                    type="number"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="address">
                  <FormLabel>Ubicación: </FormLabel>
                  <Input
                    placeholder="¿Dónde se encuetra la Veterinaria?"
                    name="address"
                    key="address"
                    type="text"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="image" isRequired>
                <Container>
                    <h1>Subir imagen de la Veterinaria</h1>
                  </Container>
                <button><UploadImage image={image} setImage={setImage}/></button>
                </FormControl>

                <FormControl id="email" isRequired>
                  <label>Email de contacto: </label>
                  <Input
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="location" isRequired>
                  <label>Location: </label>
                  <Input
                    type="text"
                    name="location"
                    placeholder="Latitud de tu veterinaria"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={(e) => handlerErrors(e)}
                    loadingText="Afiliar Veterinaria"
                    fontFamily={"body"}
                    size="lg"
                    bg={"orange.300"}
                    color={"white"}
                    _hover={{
                      bg: "orange.400",
                    }}>
                    Afiliar Veterinaria
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
    </div>
  );
}
