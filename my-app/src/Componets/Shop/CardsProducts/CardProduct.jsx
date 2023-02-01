import React from "react";
import "./CardProduct.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";

export default function CardProduct({id, name, image, price, description}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNavigateProduct = (e) => {
    e.preventDefault()
    let obj = {id, add: handleSetLocalStorage}
    dispatch(getProductDetail(obj))
    setTimeout(()=>navigate(`/shop/product/${id}`), 200)
  }


  const handleSetLocalStorage = (e, id, price, image, name) => {
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
          window.localStorage.setItem("cart", JSON.stringify([...oldCart]))
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
    return(
      <div  className="productContainer">
      <div className="productContainer">
        <div className="productCardItems">
            <div className="productCard">
              <img src={image} alt="img not found" />
              <h4>{name}</h4>
              <h6>Descripcion: {description}</h6>
              <div>
                <button onClick={(e)=> handleNavigateProduct(e)} className="buttonDetails">Ver detalles</button>
                <button onClick={(e) => handleSetLocalStorage(e, id, price, image, name)}>Agregar</button>
                <h5>${price}</h5>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }

