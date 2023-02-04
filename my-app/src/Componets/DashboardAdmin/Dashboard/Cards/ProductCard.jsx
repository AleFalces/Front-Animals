import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { modifyProduct } from "../../../../Redux/Actions";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  image,
  stock,
  price,
  description,
  Category,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function recievedDataProduct(
    e,
    id,
    name,
    image,
    stock,
    price,
    description,
    Category
  ) {
    e.preventDefault();
    const obj = {
      id,
      name,
      image,
      stock,
      price,
      description,
      Category,
    };
    // console.log("receivedData", obj)
    dispatch(modifyProduct(obj));
  }

  return (
    <div>
      <Card w="400px">
        <Box>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <CardHeader>
                  <Heading size="sm">Producto:</Heading>
                </CardHeader>
                <Text pt="2" fontSize="md">
                  {name}
                </Text>
              </Box>
              <Box>
                <Heading size="sm">Fotos:</Heading>
                <Text pt="2" fontSize="md">
                  {image}{" "}
                  {/**Tira error si le paso la etiqueta Image de Chakra*/}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Stock:
                </Heading>
                <Text pt="2" fontSize="md">
                  {stock}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  ID:
                </Heading>
                <Text pt="2" fontSize="md">
                  {id}
                </Text>
                <Heading size="sm">Precio:</Heading>
                <Text pt="2" fontSize="md">
                  {price}
                </Text>
                <Button
                  onClick={(e) => {
                    recievedDataProduct(
                      e,
                      id,
                      name,
                      image,
                      stock,
                      price,
                      description,
                      Category
                    );
                    navigate("/dashboard/updateProduct");
                  }}
                  bg={"green"}
                  color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >
                  Modificar
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
