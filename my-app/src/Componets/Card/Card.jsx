import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ data: { size, img, Sex } }) => {
	return (
		<div className="cardContainer">
			<p className="petName"> {size}</p>
			<p className="petSex"> {Sex}</p>
			<div className="cardContainer2">
				<div className="cardd" stylee="--clr: #ffc400;">
					<img className="Img imgCard" src={img} alt={size} />
					<Link to={size}>Details</Link>
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
