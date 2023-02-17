import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function ProductDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.productDetail);

  useEffect(() => {}, [dispatch]);

  const payMp = async () => {
    axios
      .post(`http://localhost:3001/donation`, {
        unit_price: detail[0].price,
        title: detail[0].name,
      })
      .then((response) => {
        window.open(response.data, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("DETAIL PRODUCT STOCK :", detail[0].stock);
let product = JSON.parse(localStorage.getItem("cart")).filter((pr)=>pr.id===detail[0].id)[0]
  return (
    <>
      <Navbar />
      <br />
              <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                bg={"brand.orange"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={()=>{navigate("/shop")}}
              >
                Volver a la tienda
              </Button>
      <Box minHeight={"100vh"} bg="brand.backgorund" paddingBottom={"3rem"}>
        <Container maxW={"4xl"}>
          <SimpleGrid
            columns={[1, 1, 2, 2]}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={detail[0].image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {detail[0].name}
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  $ {detail[0].price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {detail[0].description}
                  </Text>
                  <Text fontSize={"lg"}>
                    Gracias por colaborar, con cada compra de productos
                    solidarios estas aportando a la fundación Buddy y a miles de
                    animales de la ciudad que necesitan de ayuda economica
                  </Text>
                </VStack>

                <Box>
                  <Text
                    fontSize={{ base: "20px", lg: "22px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Detalles
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Categoria:
                      </Text>{" "}
                      {detail[0].Category}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Stock
                      </Text>{" "}
                      {detail[0].stock}u
                    </ListItem>
                  </List>
                </Box>
              </Stack>

{/* //!ACÁ ABAJO EMPIEZA LA PRUEBA DE BOTON AGREGAR AL CARRITO DESDE DETAIL 17/02/23 */}
                {
                product?.amount>0
                ?
                  <div>
                    <Text as={"span"} fontWeight={"bold"}>
                      Cantidad en el carrito: 
                    </Text> {product?.amount}u
                  </div>
                :null
                }

                <Box>
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
                    {/* {stock===0?"No hay stock":"Agregar"} */} 
                    {detail[0].stock === 0 ?"No hay stock":product?.amount === detail[0].stock?"Tope de stock alcanzado":"Agregar al carrito"} 
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    {detail[0].stock === 0 ?"No hay stock":product?.amount === detail[0].stock?"No nos queda más stock":"Agregar al carrito"} 
                        </AlertDialogHeader>
                        <AlertDialogBody>
                    {detail[0].stock === 0 ?"Lo sentimos, pronto habrá stock del producto":product?.amount === detail[0].stock?"Llegaste al limite actual de stock, próximamente repondremos el producto.":"¿Querés agregar este producto a tu carrito?"} 
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            {detail[0].stock === 0 || product?.amount === detail[0].stock ?"Volver":"Cancelar"}
                          </Button>
  
                    {
                    detail[0].stock === 0 || product?.amount === detail[0].stock ?
                    null
                    :<Button
                      color={"white"}
                      bg={"brand.orange"}
                       onClick={(e) =>{
                  detail[0].handlerSetCart(
                    e,
                    detail[0].id,
                    detail[0].price,
                    detail[0].image,
                    detail[0].name,
                    detail[0].stock
                  );
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







                //! ↓↓↓↓↓↓↓  BOTON AGREGAR AL CARRITO QUE QUEDÓ DEL 09/02/23  ↓↓↓↓↓↓↓
              {/* <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                bg={"brand.orange"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={(e) =>
                  detail[0].handlerSetCart(
                    e,
                    detail[0].id,
                    detail[0].price,
                    detail[0].image,
                    detail[0].name,
                    detail[0].stock
                  )
                }
              >
                Añadir al carrito
              </Button> */}
              {/* <Button
                fontFamily={"body"}
                borderRadius={"full"}
                size="sm"
                bg={"brand.orange"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={() => payMp()}
              >
                Comprar
              </Button> */}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>Entrega 2-3 días habiles</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

//  <div className="detailProductContainerAll">
//    <Navbar />
//    <div className="detailProductNavbarDivBottom"></div>
//    <div className="detailProductContainer">
//      <div className="divDetailProductDescription">
//        <div className="detailProductDescription">
//          <h1>{detail[0].name}</h1>
//          {/* <h1>Puntuacion </h1> */}
//          {/* <h4>★★★</h4> */}
//          <div className="detailDescription">
//            <div>
//              <h2>Categoria</h2> <h3>{detail[0].Category}</h3>
//            </div>
//            <div className="detailProductDescription2">
//              <h2>Descripcion:</h2> <h3>{detail[0].description}</h3>
//            </div>
//            <div>
//              <h2>Precio</h2> <h3>${detail[0].price}</h3>{" "}
//            </div>
//            <div>
//              <h2>Stock</h2> <h3>{detail[0].stock}u</h3>
//            </div>
//          </div>
//        </div>
//        <div className="imgxbutton">
//          <img src={detail[0].image} alt="" />
//          <div>
//            <button onClick={() => payMp()}>Comprar</button>

//            <button
//              onClick={(e) =>
//                detail[0].handlerSetCart(
//                  e,
//                  detail[0].id,
//                  detail[0].price,
//                  detail[0].image,
//                  detail[0].name,
//                  detail[0].stock
//                )
//              }
//            >
//              Agregar
//            </button>
//          </div>
//        </div>
//      </div>
//    </div>
//    <div className="divTopReview"></div>
//    <div className="reviewsContainer">Reseñas</div>
//    <div className="footerProductDetail">
//      <Footer />
//    </div>
//  </div>;
