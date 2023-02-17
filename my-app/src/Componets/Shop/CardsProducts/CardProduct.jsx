import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";
import "./CardProduct.css"
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
  stock,
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
  const product = JSON.parse(localStorage.getItem("cart")).filter((pr)=>pr.id===id)[0]
  return (
    <>
      <Box >
        <Center  py={6}>
          <Box className="boxCardContainer"
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
                // size={"lg"}
                src={image}
                borderRadius="7px"
                alt="img not found"
                width={"12rem"}
                h={"8.5rem"}
                // mb={".4rem"}
                pos={"relative"}
              />
            </Center>
            <Heading
              fontSize={"1.1rem"}
              fontFamily={"heading"}
              textTransform="uppercase"
            >
              {name}
            </Heading>
            <Text
              fontSize={".9rem"}
              fontWeight={500}
              color={"gray.500"}
              mb={.5}
              fontFamily={"body"}
            >
              {description.length>50?description.slice(0, 50)+"...":description}
            </Text>
            <Text
              fontWeight={500}
              fontSize={".9rem"}
              color={"gray.500"}
              mb={1}
              fontFamily={"body"}
            >
              Stock: {stock}u
            </Text>
            <Heading
              fontSize={"1.3rem"}
              fontWeight={"bold"}
              fontFamily={"heading"}
              textTransform="uppercase"
              color={"brand.orange"}
            >
              ${price}
            </Heading>
            <Center>
              <HStack py={0}>
                <Button
                  onClick={(e) => handleNavigateProduct(e)}
                  fontFamily={"body"}
                  borderRadius={"full"}
                  // size="md"
                  width={"7rem"}
                >
                  Ver detalles
                </Button>

                  <Box>
                  <Button
                    onClick={onOpen} 
                    fontFamily={"body"}
                    borderRadius={"full"}
                    // size="md"
                    width={"7rem"}
                    bg={"brand.green.300"}
                    color={"white"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    {/* {stock===0?"No hay stock":"Agregar"} */} 
                    {stock === 0 ?"No hay stock":product?.amount === stock?"Max":"Agregar"} 
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {stock === 0 ?"No hay stock":product?.amount === stock?"No nos queda más stock":"Agregar al carrito"} 
                        </AlertDialogHeader>
                        <AlertDialogBody>
                    {stock === 0 ?"Lo sentimos, pronto habrá stock del producto":product?.amount === stock?"Llegaste al limite actual de stock, próximamente repondremos el producto.":"¿Querés agregar este producto a tu carrito?"} 
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            {stock === 0 || product?.amount === stock ?"Volver":"Cancelar"}
                          </Button>
  
                    {
                    stock === 0 || product?.amount === stock ?
                    null
                    :<Button
                      color={"white"}
                      bg={"brand.orange"}
                      onClick={(e) => {
                        handlerSetCart(e, id, price, image, name, stock);
                        onClose();
                      }}
                      ml={3}
                      >
                      Si, agregar
                    </Button>
                    }  
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
                
                
                

//! RESGUARDO BOTON AGREGAR ↓↓↓↓↓↓↓↓↓↓↓↓
                {/* <Box>
                  <Button
                    onClick={onOpen} 
                    fontFamily={"body"}
                    borderRadius={"full"}
                    size="md"
                    bg={"brand.green.300"}
                    color={"white"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    +
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
                            onClick={(e) => {
                              handlerSetCart(e, id, price, image, name, stock);
                              onClose();
                            }}
                            ml={3}
                          >
                            Si, agregar
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box> */}

              </HStack>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}
