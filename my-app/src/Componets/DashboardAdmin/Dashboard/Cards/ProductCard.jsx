import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Box,
  Button,
  Image,
  Center,
  Divider,
  Select,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductAdmin } from "../../../../Redux/Actions";
import { useDisclosure } from "@chakra-ui/react";

export default function ProductCard({
  id,
  name,
  image,
  stock,
  price
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  function handlerDeleteProduct(e, id) {
    dispatch(deleteProductAdmin(id));
  }

  useEffect(()=>{

  },[dispatch])

  return (
    <div>
      <Card>
        <Box maxW="350px">
          <CardBody>
            <Box>
              <Text pt="2" fontWeight={"bold"} fontSize="md">
                {name}
              </Text>
            </Box>
            <Box>
              <Divider h="0.2rem" bg="brand.green.100" mt="1rem" />
              <Text pt="2" fontSize="md"></Text>
              <Center>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={image}
                  alt="Dan Abramov"
                />
              </Center>
            </Box>
            <Box>
              <Heading size="xs">STOCK:</Heading>
              <Text fontSize="md" my="0.5rem">
                {stock}
              </Text>
              <Center>
                <Select placeholder="ID" w="50%">
                  <option value="option">{id}</option>
                </Select>
              </Center>
              <Divider h="0.2rem" bg="brand.green.100" mt="1rem" />
              <Heading size="sm" mt="1rem">
                PRECIO:
              </Heading>
              <Text pt="2" fontSize="md">
                $ {price}
              </Text>
              <Button
                my="1rem"
                onClick={(e) => navigate(`/dashboard/updateProduct/${id}`)}
                bg={"green"}
                color={"white"}
                _hover={{
                  bg: "green.400",
                }}
              >
                Modificar
              </Button>
              <Button
                  my="1rem"
                  bg={"red.500"}
                  color={"white"}
                  _hover={{
                    bg: "red.400",
                  }}
                  onClick={() => onOpen()}
                >
                  Quitar producto
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        ¡Cuidado!
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        ¿Quieres quitar este producto de la tienda?
                      </AlertDialogBody>
                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Aún no.
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={(e) => {
                            handlerDeleteProduct(e, id);
                            onClose();
                          }}
                          ml={3}
                        >
                          Sí!
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
            </Box>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
