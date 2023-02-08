import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Box,
  Button,
  Image, Center, Divider, Select
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
      <Card >
        <Box maxW="350px">
          <CardBody>
          
              <Box>
                <Text pt="2" fontWeight={'bold'} fontSize="md">
                  {name}
                </Text>
              </Box>
              <Box>
              <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
                <Text pt="2" fontSize="md">
                </Text>
                <Center>
                  <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={image}
                    alt='Dan Abramov'
                  />
                </Center>
              </Box>
              <Box>
                <Heading size="xs">
                  STOCK:
                </Heading>
              <Text fontSize="md" my='0.5rem'>
                  {stock}
                </Text>
                <Center>
                <Select placeholder='ID' w='50%'>
                    <option value= 'option'>{id}</option>
                  </Select>
                  </Center>
                {/*                 <Text mt="1rem" fontSize="md">
                  {id}
                </Text> */}
                <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
                <Heading size="sm" mt='1rem'>PRECIO:</Heading>
                <Text pt="2" fontSize="md">
                  $ {price}
                </Text>
                <Button my='1rem'
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
           {/*  </Stack> */}
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
