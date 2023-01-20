import React from "react";
import {Link} from "react-router-dom"
import "./Card.css"

export const Card = ({ data: { Nombre, Imagen, Tipo } }) => {
	return (
		<div className="cardContainer">
		<p className="petName">Nombre: {Nombre}</p>
		<div className="cardContainer2">

			<div className="cardd" stylee="--clr: #ffc400;">
			<img className="Img imgCard" src={Imagen}  alt={Nombre} />
				<Link to={Nombre}>Details of {Nombre}</Link>
			</div>
		</div>
		</div>
	);
};

// ↓↓↓↓    Asi es como Ale dejó el codigo jueves 19/01/23     ↓↓↓↓
/* 
		<div className="card">
			<div className="TextCard">
				<p className="TextCard">Tipo:{Tipo}</p>
				<img className="Img" src={Imagen} alt={Nombre} />
				<p className="TextCard">Nombre:{Nombre}</p>
			</div>
		</div> 
*/