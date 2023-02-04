import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../Redux/Actions";

// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  //   useColorModeValue,
  Select,
} from "@chakra-ui/react";

export default function FormUpdateProduct() {
  //deberia recibir el objeto con los datos actuales
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.modifyProduct);

  const [input, setInput] = useState({
    name: dataProduct.name,
    description: dataProduct.description,
    Category: dataProduct.Category,
    image: dataProduct.image,
    price: dataProduct.price,
    stock: dataProduct.stock,
  });

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
    if (input.price < 100) {
      errors.price = "Selecciona una imagen.";
    }
    if (input.stock <= 0) {
      errors.stock = "Agregar por lo menos un stock del producto.";
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
    e.preventDefault();
    dispatch(updateProduct(dataProduct.id, input));
    alert("Producto actualizado.");
  }
  //Revisar xq la categoria "alimentos" me tira error si el name del product tiene espacios en el campo
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          //   bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Actualizar producto
              </Heading>
            </Stack>

            <Box
              rounded={"lg"}
              //   bg={useColorModeValue("white", "gray.700")}
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
                        key="name"
                        value={input.name}
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
                        value={input.price}
                        key="price"
                        onChange={(e) => handlerChange(e)}
                      />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl id="Category" isRequired>
                  <Select
                    name="Category"
                    value={input.Category}
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
                    value={input.stock}
                    key="stock"
                    type="number"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="description">
                  <FormLabel>Descripción: </FormLabel>
                  <Input
                    placeholder="Algún comentario sobre el producto"
                    name="description"
                    value={input.description}
                    key="description"
                    type="text"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="image" isRequired>
                  <label>Imagen del producto:</label>
                  <Input
                    type="text"
                    name="image"
                    value={input.image}
                    placeholder="https://urlDeLaImagen.jpg"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>
                <Stack spacing={10} pt={2}>
                    <Button
                      onClick={(e) => handlerErrors(e)}
                      loadingText="Publicar el producto"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                  <Link to={"/dashboard"}>
                      Guardar producto
                  </Link>
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
