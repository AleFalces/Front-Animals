import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
	shopSearchInputName,
	shopFilterValue,
	getAllProducts,
} from "../../../Redux/Actions";
import "./ShopNavbar.css";
import { useNavigate } from "react-router-dom";

export default function ShopNavbar({handlerSetCart, handleRemoveItemCart}) {
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const [input, setInput] = useState("");
	const inputSearch = document.getElementById("inputSearch");

	const handlerInputChange = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};
	const handlerClickSearch = (e) => {
		e.preventDefault(e);
		if (input.trim() !== "") {
			dispatch(shopSearchInputName(input.trim()));
			inputSearch.value = "";
		} else {
			inputSearch.value = "";
		}
	};

	const handlerShopFilterValue = (e) => {
		e.preventDefault();
		e.target.value !== "todos"
			? dispatch(shopFilterValue(e.target.value))
			: dispatch(getAllProducts());
	};

	function handlerClick (e) {
		e.preventDefault()
		setTimeout(() => navigate("/shop/cart"),500)
	}

	return (
		<div className="shopNavbarContainer">
			<div className="divNavbarInputContainer">
				<div className="divCartAndInput">
				    <button onClick={(e) => { handlerClick(e) }}>Carrito</button>
					<div className="divNavbarInput">

					  <input
						id="inputSearch"
						onChange={(e) => handlerInputChange(e)}
						type="text"
						placeholder="Busqueda por nombre"
						/>
					  <button onClick={(e) => handlerClickSearch(e)}>Buscar</button>
				 	</div>
				</div>
			</div>
			<div className="shopNavbarContainer2">
				<button value="alimentos" onClick={(e) => handlerShopFilterValue(e)}>
					Alimentos
				</button>
				<button value="indumentaria" onClick={(e) => handlerShopFilterValue(e)}>
					Indumentaria
				</button>
				<button value="tazas" onClick={(e) => handlerShopFilterValue(e)}>
					Tazas
				</button>
				<button value="otros" onClick={(e) => handlerShopFilterValue(e)}>
					Otros
				</button>
				<button value="todos" onClick={(e) => handlerShopFilterValue(e)}>
					Todos
				</button>
			</div>
		</div>
	);
}
