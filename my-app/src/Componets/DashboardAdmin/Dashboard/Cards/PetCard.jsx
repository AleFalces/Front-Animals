import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  // Button,
} from "@chakra-ui/react";
// import { useDispatch} from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function PetCard({ id, size, species, age, img, detail, area, status, userId }) {
// const dispatch = useDispatch();
// const navigate = useNavigate()

//   function recievedDataProduct(e, id, size, species, age, img, detail, area, status, userId){
//     e.preventDefault()
//     const obj = {
//       id,
//       size,
//       species,
//       age,
//       img,
//       detail,
//       area,
//       status,
//       userId
//     }
//     console.log("receivedData", obj)
//     dispatch(modifyProduct(obj))
//   }

  return (
    <div>
      <Card w="400px">
        <Box>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
              <Heading size="xs" textTransform="uppercase">
                  Tamaño:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {size}
                </Text>
              </Box>
              <Box>
              <Heading size="xs" textTransform="uppercase">
                  Especie:
                </Heading>
                <Text pt="2" fontSize="sm"> 
                  {species}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Edad:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {age}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  ID:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {id}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  Detalles:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {detail}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  Fotos:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {img}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  Ubicacion:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {area}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  Estado:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {status}
                </Text>
{/*pensar en agregar un boton para cambiarle estado de la mascota*/}
                {/* <Button
                onClick={(e) => {recievedDataProduct(e, id, name, image, stock, price, description, Category); navigate("/dashboard/updateProduct")}}
                bg={"green"}
                color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >Modificar</Button> */}
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
