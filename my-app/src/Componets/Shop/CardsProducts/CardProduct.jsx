import React from "react";
import "./CardProduct.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";

export default function CardProduct({id, name, image, price, description}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handle = (e) => {
    e.preventDefault()
    dispatch(getProductDetail(id))
    setTimeout(()=>navigate(`/shop/product/${id}`), 200)
  }      
    return(
      
      <div  className="productContainer">
      <div className="productContainer">
        <div onClick={(e)=> handle(e)} className="productCardItems">
            <div className="productCard">
              <img src={image} alt="img not found" />
              <h4>{name}</h4>
              <h6>Descripcion: {description}</h6>
              <div>
                <button>Agregar</button>
                <h5>${price}</h5>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }

