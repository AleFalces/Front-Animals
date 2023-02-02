import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartCards.css"

export default function CartCards({amount, id, image, name, price, total, handlerSetCart, handleRemoveItemCart}) {
    return (
        <div className="divContainerCartAll">
          <div className="divContainerCart">
            <img src={image} alt="img not found" className="img"/>
            <div className="divDrescriptionCart">
              <div><h2>Producto</h2><h3>{name}</h3></div>
              <div><h2>Cantidad</h2><h3>{amount}</h3></div>
              <div><h2>Precio</h2><h3>{price}</h3></div>
              <div><h2>Total</h2><h3>{total}</h3></div>
              <div>
                <button onClick={(e) =>handlerSetCart(e, id, price, image, name)}>Agregar</button>
                <button onClick={(e)=> handleRemoveItemCart(e, id)}>Sacar</button>
              </div>

            </div>
          </div>
        </div>
    )
}