import React from "react";
import "./CardProduct.css"

export default function CardProduct({id, name, image, price, description}) {
    return(
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
    )
}

