import React, { useState, useEffect  }  from "react";
import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts  } from "../../../../Redux/Actions";

export default function ProductCard({ id, name, image, stock, price }) {
// const dispatch = useDispatch();
// const [statusUser, setStatus] = useState(status);
  
//   function handlerSetStatusUser(id) {
//     dispatch(setStatusUser(id));
  
//   }

//   useEffect(()=>{
      
//   },[productsArray])

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
                
                {/* {status === "banned" ? <Button
                onClick={() => {handlerSetStatusUser(id)}}
                bg={"green"}
                color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >Activar</Button>
              :
                <Button
                  onClick={() => handlerSetStatusUser(id)}
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    bg: "red.400",
                  }}
                >
                  Bloquear
                </Button>} */}
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
