import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postVet } from "../../../Redux/Actions";

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
  Select,
} from "@chakra-ui/react";

export default function FormAffiliateVets() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
  });

  const errors = {
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
  };

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

    dispatch(postVet(input));
    alert("Veterinaria afiliada exitosamente.");

    // ↓↓↓ FALTA RESET CORRECTLY EL INPUT UNA VEZ AÑADIDA LA VETERINARIA ↓↓↓
    // setInput({
    //   name: "",
    //   description: "",
    //   email: "",
    //   image: "",
    //   phone: "",
    //   address: "",
    //   
    // });
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
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
                  <label>Imágenes del local/espacio de trabajo: </label>
                  <Input
                    type="text"
                    name="image"
                    placeholder="https://urlDeLaImagen.jpg"
                    onChange={(e) => handlerChange(e)}
                  />
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
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={(e) => handlerErrors(e)}
                    loadingText="Afiliar Veterinaria"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Afiliar Veterinaria
                  </Button>
                </Stack>
              </Stack>
            </Box>

            <Link to={"/dashboard"}>
              <button>Atrás</button>
            </Link>
          </Stack>
        </Flex>
      </form>
    </div>
  );
}