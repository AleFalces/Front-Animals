import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { getAllProducts } from "../../Redux/Actions";

import CardsProduct from "./CardsProducts/CardsProduct";
import ShopNavbar from "./ShopNavbar/ShopNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box, SimpleGrid, Center, chakra } from "@chakra-ui/react";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // let reduxCart = useSelector((state) => state.cart)
  const [cart, setCart] = useState();

  function handleRemoveItemCart(e, id) {
    e.preventDefault();
    try {
      let currentCart = JSON.parse(window.localStorage.getItem("cart"));
      let flag = false;
      let index;
      currentCart.forEach((pr, i) => {
        if (pr.id === id) {
          flag = true;
          index = i;
        }
      });

      if (flag) {
        console.log("CASO FLAG TRUE");
        if (currentCart[index].amount === 1) {
          console.log("CASO FLAG TRUE & AMOUNT == 1");
          if (index === 0) {
            console.log("CASO FLAG TRUE & AMOUNT == 1 & INDEX === 0");
            currentCart.shift();
            console.log(currentCart);
          }
        } else {
          console.log("CASO FLAG TRUE & AMOUNT !== 0");
        }
      } else {
        console.log("CASO FLAG FALSE");
      }
    } catch (error) {
      console.log(error);
    }
  }



  
  const handlerSetCart = (e, id, price, image, name, stock) => {
    e.preventDefault()

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
        if(stock=== 0 || stock === oldCart[index].amount) {
          return alert("Se llegó al limite de stock actual")
        } else {
          oldCart[index].amount += 1;

          oldCart[index].total = oldCart[index].price * oldCart[index].amount
          let newCart = window.localStorage.setItem("cart", JSON.stringify([...oldCart]))
          dispatch(getAllProducts)
          console.log("CASO SI EXISTE CARRITO Y SIIIII TENGO INDEX",JSON.parse(localStorage.getItem("cart")));
          return alert(`Agregaste de nuevo el producto ${name}`)
        }
      } else {
        if(stock!== 0) {
        product.total = product.price
        let newCart = window.localStorage.setItem("cart", JSON.stringify([...oldCart, product]))
        dispatch(getAllProducts)
        console.log("CASO SI EXISTE CARRITO Y NOOOOO TENGO INDEX",JSON.parse(localStorage.getItem("cart")));
        return alert(`Agregaste el producto ${name}`)
      } else {
        return alert("El producto no tiene stock :c")
      }
      }
    } else {
      if(stock!== 0) {
        product.total = product.price
        let newCart = window.localStorage.setItem("cart", JSON.stringify([product]))
        dispatch(getAllProducts)
        console.log("CASO NO EXISTE CARRITO",JSON.parse(localStorage.getItem("cart")));
        return alert(`Agregaste el producto ${name}`)
      } else {
        return alert("El producto no tiene stock :c")
      }
    }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    dispatch(getAllProducts());
  }, [cart]);


  return (
    <>
      <Navbar />
      <Box minHeight={"150vh"} bg="brand.backgorund" paddingBottom={"3rem"}>
        <ShopNavbar
          handlerSetCart={handlerSetCart}
          handleRemoveItemCart={handleRemoveItemCart}
        />
        <Center>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
            {products.length ? (
              <CardsProduct
                products={products}
                handlerSetCart={handlerSetCart}
                handleRemoveItemCart={handleRemoveItemCart}
              />
            ) : (
              <chakra.h1>No se econtraron productos</chakra.h1>
            )}
          </SimpleGrid>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
