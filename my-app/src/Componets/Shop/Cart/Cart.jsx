import React, { useState, useEffect } from "react";
import CartCards from "./CartCards";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {
  Box,
  Icon,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export default function Cart() {
  const [cartFlag, setCartFlag] = useState(false);
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  console.log(cart);

  function handleStateChange() {
    if (cartFlag === true) {
      setCartFlag(false);
    } else {
      setCartFlag(true);
    }
  }

  function handleRemoveItemCart(e, id) {
    e.preventDefault();
    try {
      let currentCart = JSON.parse(window.localStorage.getItem("cart"));
      let index;
      let saveProduct = currentCart.find((pr, i) => {
        if (pr.id === id) {
          index = i;
          return true;
        }
      });
      if (saveProduct.amount !== 1) {
        saveProduct.amount -= 1;
        saveProduct.total = saveProduct.price * saveProduct.amount;
        window.localStorage.setItem("cart", JSON.stringify(currentCart));
        return handleStateChange();
        // return alert("Eliminaste 1 unidad de este producto de tu carrito");
      }
      if (saveProduct.amount === 1 && currentCart.length === 1) {
        let emptyArray = [];
        window.localStorage.setItem("cart", JSON.stringify(emptyArray));
        return handleStateChange();
        // return alert("Eliminaste este producto de tu carrito");
      }
      if (saveProduct.amount === 1 && currentCart.length === 2) {
        if (index === 0) {
          let arrayResult = [currentCart[1]];
          window.localStorage.setItem("cart", JSON.stringify(arrayResult));
          return handleStateChange();
          // return alert("Eliminaste este producto de tu carrito");
        } else {
          let array = [currentCart[0]];
          window.localStorage.setItem("cart", JSON.stringify(array));
          return handleStateChange();
          // return alert("Eliminaste este producto de tu carrito");
        }
      }
      if (saveProduct.amount === 1 && currentCart.length > 2) {
        if (index === 0) {
          let arrayResult = currentCart.slice(1);
          window.localStorage.setItem("cart", JSON.stringify(arrayResult));
          return handleStateChange();
          // return alert("Eliminaste este producto de tu carrito");
        } else if (index === currentCart.length - 1) {
          let arrayResult = currentCart.slice(0, -1);
          window.localStorage.setItem("cart", JSON.stringify(arrayResult));
          return handleStateChange();
          // return alert("Eliminaste este producto de tu carrito");
        } else {
          let first = currentCart.slice(0, index);
          let second = currentCart.slice(index + 1);
          let arrayResult = [...first, ...second];
          window.localStorage.setItem("cart", JSON.stringify(arrayResult));
          return handleStateChange();
          // return alert("Eliminaste este producto de tu carrito");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handlerSetCart = (e, id, price, image, name, stock) => {
    e.preventDefault();
    try {
      let product = {
        name,
        image,
        price,
        id,
        stock,
        amount: 1,
      };
      let oldCart = JSON.parse(window.localStorage.getItem("cart"));
      if (oldCart) {
        let index = false;
        oldCart.forEach((pr, i) => {
          if (pr.id === product.id) {
            index = i;
          }
        });
        if (index !== false) {
          if (stock === 0 || stock === oldCart[index].amount) {
            return alert("Se llegó al limite de stock actual");
          } else {
            oldCart[index].amount += 1;
            oldCart[index].total = oldCart[index].price * oldCart[index].amount;
            window.localStorage.setItem("cart", JSON.stringify([...oldCart]));
            console.log(
              "OLDCART AMOUNT: ",
              oldCart[index].amount,
              "--- STOCK: ",
              stock
            );
            // alert(`Agregaste de nuevo el producto ${name}`);
            return handleStateChange();
          }
        } else {
          product.total = product.price;
          window.localStorage.setItem(
            "cart",
            JSON.stringify([...oldCart, product])
          );
          // alert(`Agregaste el producto ${name}`);
          return handleStateChange();
        }
      } else {
        product.total = product.price;
        window.localStorage.setItem("cart", JSON.stringify([product]));
        // alert(`Agregaste el producto ${name}`);
        return handleStateChange();
      }

      // handleStateChange();
    } catch (error) {
      console.log(error);
    }
  };

  const total = cart?.reduce((acc, el) => acc + el.total, 0);
  const payMp = () => {
    axios
      .post(`http://localhost:3001/donation`, {
        cart,
      })
      .then((response) => {
        window.open(response.data, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {}, [cartFlag]);

  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"} bg="brand.backgorund" paddingBottom={"3rem"}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            {/* <Heading fontSize="2xl" fontWeight="extrabold" py={6}>
              Carrito
            </Heading> */}
            <Box padding={5} bg={"orange.300"}>
              <Icon
                as={AiOutlineShoppingCart}
                w={10}
                h={10}
                color="brand.background"
              />
            </Box>
            {!cart || cart.length === 0 ? (
              <Center>
                <Stack>
                  <Text
                    textAlign={"center"}
                    fontSize={"4xl"}
                    py={10}
                    fontWeight={"bold"}
                    color={"brand.darkBlue"}
                    fontFamily={"heading"}
                  >
                    No hay productos en tu carrito
                  </Text>
                  <Link to={"/shop"}>
                    <Icon
                      as={MdArrowBackIosNew}
                      
                      color="orange.400"
                      boxSize={5}
                      _hover={{
                        color: "grey",
                        boxSize: "7",
                      }}
                    />
                    <Icon
                      as={MdArrowBackIosNew}
                      color="orange.400"
                      boxSize={5}
                      _hover={{
                        color: "grey",
                        boxSize: "7",
                      }}
                    />
                    <Button
                      fontFamily={"body"}
                      bg="base.green.100"
                      color={"grey"}
                      _hover={{
                        color: "orange.400",
                      }}
                      p="0"
                      mr="1rem"
                    >
                      {" "}
                      Volver a la tienda
                    </Button>
                  </Link>
                </Stack>
              </Center>
            ) : (
              <Stack spacing="10">
                {cart.map((pr) => (
                  <CartCards
                    amount={pr.amount}
                    id={pr.id}
                    image={pr.image}
                    name={pr.name}
                    price={pr.price}
                    total={pr.total}
                    stock={pr.stock}
                    handlerSetCart={handlerSetCart}
                    handleRemoveItemCart={handleRemoveItemCart}
                  />
                ))}
                <Center>
                  <SimpleGrid>
                    <Text
                      textAlign={"center"}
                      fontSize={"2xl"}
                      py={10}
                      fontWeight={"bold"}
                      color={"brand.orange"}
                      fontFamily={"heading"}
                    >
                      Total: $ {total}
                    </Text>
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
                      onClick={() => payMp()}
                    >
                      Pagar
                    </Button>
                  </SimpleGrid>
                </Center>

                <Link to={"/shop"}>
                  <Icon
                    as={MdArrowBackIosNew}
                    color="orange.400"
                    boxSize={5}
                    _hover={{
                      color: "grey",
                      boxSize: "7",
                    }}
                  />
                  <Icon
                    as={MdArrowBackIosNew}
                    color="orange.400"
                    boxSize={5}
                    _hover={{
                      color: "grey",
                      boxSize: "7",
                    }}
                  />
                  <Button
                    fontFamily={"body"}
                    bg="base.green.100"
                    color={"grey"}
                    _hover={{
                      color: "orange.400",
                    }}
                    p="0"
                    mr="1rem"
                  >
                    {" "}
                    Seguir comprando
                  </Button>
                </Link>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

//  <div>
//           <h1>Cart</h1>
//           <div>
//             {
//             !cart
//             ? <h1>NO CART</h1>
//             : <h1 className="total">Total: {total}</h1>
//             }
//           </div>
//           <div>
//               {
//               !cart
//               ? <h1>Tu carrito esta vacio</h1>
//               : <div>
//                   {cart.map((pr) => <CartCards amount={pr.amount} id={pr.id} image={pr.image} name={pr.name} price={pr.price} total={pr.total} stock={pr.stock} handlerSetCart={handlerSetCart} handleRemoveItemCart={handleRemoveItemCart}/>)}
//                   <button onClick={()=>payMp()}>Pagar</button>
//                 </div>
//               }
//           </div>
//         </div>
