import React from "react";
import "./CardProduct.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions";

export default function CardProduct({id, name, image, price, description}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

    return(
    <Link to={`/shop/product/${id}`}>
      <div className="productContainer">
        <div className="productCardItems">
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
    </Link>
    )
  }

