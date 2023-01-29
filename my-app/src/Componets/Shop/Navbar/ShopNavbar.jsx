import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { shopSearchInputName } from "../../Redux/Actions";
import "./ShopNavbar.css"

export default function ShopNavbar () {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handlerClick = (e) => {
        e.preventDefault()
        // dispatch()
    }
    const handlerInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    } 
    const handlerClickSearch = (e) => {
        e.preventDefault(e);
        dispatch(shopSearchInputName(input.trim()))
    }
    return (
        <div className="shopNavbarContainer">
          <div className="divNavbarInput">
              <input onChange={(e) => handlerInputChange(e)} type="text" placeholder="Busqueda por nombre"/>
              <button onClick={(e) => handlerClickSearch(e)}>Buscar</button>
          </div>
          <div className="shopNavbarContainer2">
              <button>Alimentos</button>
              <button>Tazas</button>
              <button>Indumentaria</button>
              <button>Otros</button>
            </div>
        </div>
    )
}