import { Flex } from "@chakra-ui/layout";
import { Button, Text, Center, SimpleGrid, Box, Image, Stack, useColorModeValue as mode } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartCard.css"
// import { Product } from "./Product";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function CartCards({
  amount,
  id,
  image,
  name,
  price,
  total,
  stock,
  handlerSetCart,
  handleRemoveItemCart,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Center
        h={"12rem"}
        w={"100%"}
      >
        <Flex
        boxShadow={"0.2rem 0.2rem .9rem .1rem gray"}
        borderRadius={"12px"}
          direction={{
            base: "column",
            md: "row",
          }}
          w={"85%"}
          justify="space-between"
          align="center"
          flexDirection={"row"}
        >
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} w={"11rem"}>
            <Text  fontWeight={"600"}  ml={"6px"}>
              {name}
            </Text>
            <Image
            alignSelf={"center"}
            rounded="lg"
            width="9rem"
            height="9rem"
            fit="cover"
            src={image}
            alt={name}
            draggable="false"
            loading="lazy"
            />
          </Box>   
          <Box pt="4">
            <Stack  spacing="8" w={"30vw"} h={"10rem"}>
              <Text className="priceText" color={mode("gray.600", "gray.400")} fontSize="md" fontWeight={"600"}>
                Stock:{stock}
              </Text>
              <Text className="priceText" color={mode("gray.600", "gray.400")} fontSize="md" fontWeight={"600"}>
                Cantidad:{amount}
              </Text>
              <Text className="priceText" color={mode("gray.600", "gray.400")} fontSize="md" fontWeight={"600"}>
                Precio:${price}
              </Text>
            </Stack>
          </Box>
          <Box  
            h={"9rem"} 
            display={"flex"} 
            flexDirection={"column"} 
            justifyContent={"space-around"} 
            mr={"10px"}>

            <Box>
               <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                bg={"brand.green.300"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={(e) => handleRemoveItemCart(e, id)}
              >
                -
              </Button> 

{/* //!                 ↓↓↓↓↓↓↓↓     BUTTONS  +   &   -      ↓↓↓↓↓↓↓     */}

                  <Button
                    fontFamily={"body"}
                    borderRadius={"full"}
                    size="sm"
                    bg={"brand.green.300"}
                    _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg",
                      }}
                    onClick={amount === stock ?onOpen: (e)=>handlerSetCart(e, id, price, image, name, stock)} 
                  >
                    {stock===amount?"x":"+"} 
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {amount === stock ?"No hay más stock":"Agregar al carrito"} 
                        </AlertDialogHeader>
                        <AlertDialogBody>
                    {amount === stock?"Llegaste al limite actual de stock, próximamente repondremos el producto.":"¿Querés agregar este producto a tu carrito?"} 
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            {amount === stock ?"Volver":"Cancelar"}
                          </Button>
  
                    {
                    amount === stock ?
                    null
                    :<Button
                      color={"white"}
                      bg={"brand.orange"}
                      ml={3}
                      onClick={(e) =>{
                        handlerSetCart(e, id, price, image, name, stock)
                        onClose();
                      }}
                      >
                      Si, agregar
                    </Button>
                   }  
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
                 
                 <Text className="totalText">Total: ${total}</Text>
               </Box>
            </Flex>
          </Center>
    </>
  );
}
