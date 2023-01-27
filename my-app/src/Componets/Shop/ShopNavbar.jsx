import React, { useState } from "react";
import CheckboxGrid from "./Checkbox/CheckboxGrid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { shopFilterChecklist, shopSearchInputName } from "../../Redux/Actions";

export default function ShopNavbar () {
    const dispatch = useDispatch()
    const checklist = useSelector((state) => state.shopChecklist)
    const [input, setInput] = useState("")

    const handlerClick = (e) => {
        e.preventDefault()
        dispatch(shopFilterChecklist(checklist))
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
        <div>
            <div>
              <CheckboxGrid/>
              <button onClick={(e) => handlerClick(e)}>Filtrar</button>
            </div>
            <div>
              <input onChange={(e) => handlerInputChange(e)} type="text" placeholder="Busqueda por nombre"/>
              <button onClick={(e) => handlerClickSearch(e)}>Buscar</button>
            </div>
        </div>
    )
}