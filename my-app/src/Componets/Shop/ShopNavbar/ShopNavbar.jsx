import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { shopSearchInputName, shopFilterValue, getAllProducts } from "../../../Redux/Actions";
import "./ShopNavbar.css"

export default function ShopNavbar () {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const inputSearch = document.getElementById("inputSearch")

    const handlerInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    } 
    const handlerClickSearch = (e) => {
        e.preventDefault(e);
        dispatch(shopSearchInputName(input.trim()))
        inputSearch.value = ""
    }

    const handlerShopFilterValue = (e) => {
        e.preventDefault()
        e.target.value!=="todos"
        ?dispatch(shopFilterValue(e.target.value))
        :dispatch(getAllProducts())
    };
    return (
        <div className="shopNavbarContainer">
          <div className="divNavbarInputContainer">
            <div className="divNavbarInput">
                <input id="inputSearch" onChange={(e) => handlerInputChange(e)} type="text" placeholder="Busqueda por nombre"/>
                <button onClick={(e) => handlerClickSearch(e)}>Buscar</button>
            </div>
          </div>

          <div className="shopNavbarContainer2">
              <button value="alimentos" onClick={(e) => handlerShopFilterValue(e)}>Alimentos</button>
              <button value="indumentaria" onClick={(e) => handlerShopFilterValue(e)}>Indumentaria</button>
              <button value="tazas" onClick={(e) => handlerShopFilterValue(e)}>Tazas</button>
              <button value="otros" onClick={(e) => handlerShopFilterValue(e)}>Otros</button>
              <button value="todos" onClick={(e)=> handlerShopFilterValue(e)}>Todos</button>
            </div>
        </div>
    )
}