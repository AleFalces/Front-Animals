import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = ({ data: { size, img, sex } }) => {
	return (
		<div className="card2">
			<div className="face front">
				<img src={img} alt="img not found" />
				<h3>{size}</h3> {/* size deberia ser el tamaño, type/specie si es gato o perro */}
			</div>
			<div className="face back">
				<h3>Sex: {sex}</h3>
				<p>Lorem ipsum dolor sit.</p>
				<p>Lorem ipsum dolor sit.</p>
				<p>Lorem ipsum dolor sit.</p>
				<div className="link2">
					<a href="#">Click for details</a>
				</div>
			</div>
		</div>
	);
};

export default Card;




// ↓↓↓   Asi es como dejó Julian el codigo el 20/01/23   ↓↓↓
{/* 
		<div className="cardContainer">
			<p className="petName"> {size}</p>
			<p className="petSex"> {sex}</p>
			<div className="cardContainer2">
				<div className="cardd" stylee="--clr: #ffc400;">
					<img className="Img imgCard" src={img} alt={size} />
					<Link to={size}>Details</Link>
				</div>
			</div>
		</div> 
*/}







// ↓↓↓↓    Asi es como Ale dejó el codigo jueves 19/01/23     ↓↓↓↓
{/* 
		<div className="card">
			<div className="TextCard">
				<p className="TextCard">Tipo:{Tipo}</p>
				<img className="Img" src={Imagen} alt={Nombre} />
				<p className="TextCard">Nombre:{Nombre}</p>
			</div>
		</div> 
*/}
