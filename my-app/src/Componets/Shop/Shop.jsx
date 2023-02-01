import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { getAllProducts, getCart } from "../../Redux/Actions";
import "./Shop.css"
import CardsProduct from "./CardsProducts/CardsProduct"
import ShopNavbar from "./ShopNavbar/ShopNavbar";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Shop() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [cart, setCart] = useState({});
  let reduxCart = useSelector((state) => state.cart)

  const handlerSetCart = (e, id, price, image, name) => {
    e.preventDefault()
    try {

      let product = {
        name,
        image,
        price,
        id,
        amount: 1,
      }
      let oldCart = JSON.parse(window.localStorage.getItem("cart"))

      if(oldCart) {
        let index = false;
        oldCart.forEach((pr, i) => {
          if (pr.id === product.id) {
            index = i
          }
        });
        if (index !== false) {
          oldCart[index].amount += 1;
          oldCart[index].total = oldCart[index].price * oldCart[index].amount
          let a = window.localStorage.setItem("cart", JSON.stringify([...oldCart]))
          console.log("CASO SI EXISTE CARRITO Y SIIIII TENGO INDEX",JSON.parse(localStorage.getItem("cart")));
        alert(`Agregaste de nuevo el producto ${name}`)
      } else {
        product.total = product.price
        window.localStorage.setItem("cart", JSON.stringify([...oldCart, product]))
        console.log("CASO SI EXISTE CARRITO Y NOOOOO TENGO INDEX",JSON.parse(localStorage.getItem("cart")));
        alert(`Agregaste el producto ${name}`)
      }
    } else {
      product.total = product.price
      window.localStorage.setItem("cart", JSON.stringify([product]))
      console.log("CASO NO EXISTE CARRITO",JSON.parse(localStorage.getItem("cart")));
      alert(`Agregaste el producto ${name}`)
    }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getCart())
    console.log("SHOP, REDUX CART",reduxCart);
  }, [dispatch])

    return (
      <div className="divStoreContainer">
        <Navbar></Navbar>
        <br /><br />
        <div className="divContainerShop">
          <ShopNavbar handlerSetCart={handlerSetCart}/>
          <div className="productsContainer">
            {products.length?<CardsProduct products={products} handlerSetCart={handlerSetCart}/> : <h1>No se econtraron productos</h1> }
          </div>
        </div>
        <Footer/>
      </div>
    )
}




