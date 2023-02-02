import React, { useState, useEffect  }  from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  // CardHeader,
  // Image,
  // Link
} from "@chakra-ui/react";
import { useDispatch, useSelector} from "react-redux";
import { outOfStock, modifyProduct  } from "../../../../Redux/Actions";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, name, image, stock, price, description, Category }) {
const dispatch = useDispatch();
const navigate = useNavigate()

  function recievedDataProduct(e, id, name, image, stock, price, description, Category){
    e.preventDefault()
    const obj = {
      id,
      name,
      image,
      stock,
      price,
      description,
      Category
    }
    console.log("receivedData", obj)
    dispatch(modifyProduct(obj))
  }

  // function handlerOutOfStock(id){
  //   dispatch(outOfStock(id))
  // }

  // useEffect(()=>{
  //     dispatch(getAllProducts())
  // },[])

  return (
    <div>
      <Card w="400px">
        <Box>
          {/* <CardHeader>
            <Heading size="md">Info de usuario</Heading>
          </CardHeader> */}

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                {/* <Heading size="xs" textTransform="uppercase">
                  Nombre y Apellido:
                </Heading> */}
                <Text pt="2" fontSize="sm">
                  {name}
                </Text>
              </Box>
              <Box>
                {/* <Heading size="xs" textTransform="uppercase">
                  Email:
                </Heading> */}
                <Text pt="2" fontSize="sm"> 
                  {image} {/**Tira error si le paso la etiqueta Image de Chakra*/}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Stock disponible:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {stock}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  ID:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {id}
                </Text>
                {/* <Heading size="xs" textTransform="uppercase">
                  Estado:
                </Heading> */}
                <Text pt="2" fontSize="sm">
                  {price}
                </Text>

                {/* <Link href="http://localhost:3000" isExternal> */}
                <Button
                onClick={(e) => {recievedDataProduct(e, id, name, image, stock, price, description, Category); navigate("/dashboard/updateProduct")}}
                bg={"green"}
                color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >Modificar</Button>
                {/* </Link> */}
              
              {/* <Button
                  // onClick={() => handlerOutOfStock(id)}
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    bg: "red.400",
                  }}
                >
                  Sin stock
                </Button> */}
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
