import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";


import {
  Box,
  useColorModeValue,
  Image,
  Heading,
  Text,
  Center,
  HStack,
  Button,
} from "@chakra-ui/react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function CardProduct({
  id,
  name,
  image,
  price,
  description,
  handlerSetCart,
  handleRemoveItemCart,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateProduct = (e) => {
    e.preventDefault();
    let obj = { id, handlerSetCart, handleRemoveItemCart };
    dispatch(getProductDetail(obj));
    setTimeout(() => navigate(`/shop/product/${id}`), 200);
  };


  return (
    <>
      <Box>
        <Center py={6}>
          <Box
            maxW={"320px"}
            w={"full"}
            h={"450px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Center>
              <Image
                size={"lg"}
                src={image}
                borderRadius="7px"
                alt="img not found"
                h={"150px"}
                mb={4}
                pos={"relative"}
              />
            </Center>
            <Heading
              fontSize={"2xl"}
              fontFamily={"heading"}
              textTransform="uppercase"
            >
              {name}
            </Heading>
            <Text
              fontWeight={500}
              color={"gray.500"}
              mb={1}
              fontFamily={"body"}
            >
              {description}
            </Text>
            <Heading
              fontSize={"2xl"}
              fontWeight={"bold"}
              fontFamily={"heading"}
              textTransform="uppercase"
              color={"brand.orange"}
            >
              ${price}
            </Heading>
            <Center>
              <HStack py={5}>
                <Button
                  onClick={(e) => handleNavigateProduct(e)}
                  fontFamily={"body"}
                  borderRadius={"full"}
                  size="md"
                >
                  Vet detalles
                </Button>
                <Box>
                  <Button
                    onClick={onOpen}
                    fontFamily={"body"}
                    borderRadius={"full"}
                    size="md"
                    bg={"brand.green.300"}
                    color={"white"}
                    _hover={{
                      bg: "brand.green.100",
                    }}
                  >
                    Agregar
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Agregar al carrito
                        </AlertDialogHeader>
                        <AlertDialogBody>
                          ¿Queres agregar este producto al carrito?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancelar
                          </Button>
                          <Button
                            color={"white"}
                            bg={"brand.orange"}
                            onClick={(e) =>
                              handlerSetCart(e, id, price, image, name)
                            }
                            ml={3}
                          >
                            Si, agregar
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
              </HStack>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}
