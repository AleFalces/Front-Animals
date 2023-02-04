import React from "react";
import "./CardProduct.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";

export default function CardProduct({id, name, image, price, description, handlerSetCart, handleRemoveItemCart}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNavigateProduct = (e) => {
    e.preventDefault()
    let obj = {id, handlerSetCart, handleRemoveItemCart}
    dispatch(getProductDetail(obj))
    setTimeout(()=>navigate(`/shop/product/${id}`), 200)
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
                <button onClick={(e) => handlerSetCart(e, id, price, image, name)}>Agregar</button>
                <h5>${price}</h5>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }

