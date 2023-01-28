import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { getAllProducts } from "../../Redux/Actions";
import { Container, Row, Col } from "react-bootstrap";
import "./Shop.css"
import CardsProduct from "./CardsProduct"
import ShopNavbar from "./ShopNavbar";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Shop() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

    return (
      <div className="divStoreContainer">
        <Navbar></Navbar>
        <br /><br />
        <div className="divContainerShop">
          <ShopNavbar/>
          <div className="productsContainer">
            {products.length?<CardsProduct products={products}/> : <h1>No se econtraron productos</h1> }
          </div>
        </div>
        <Footer/>
      </div>
    )
}




