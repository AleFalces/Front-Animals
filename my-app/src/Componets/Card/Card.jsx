import React from "react";
import "./Card.css";

const Card = ({ data: { size, img, sex, species, age } }) => {
	return (
		<div className="card2">
			<div className="face front">
				<img src={img} alt="img not found" />
			</div>
			<div className="face back">
				<h3>Sex: {sex}</h3>
				<h3>Species: {species}</h3>
				<h3>Size: {size}</h3>
				<h3>Age: {age}</h3>
				<div className="link2">
					<a href="#">Click for details</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

// ↓↓↓   Asi es como dejó Julian el codigo el 20/01/23   ↓↓↓

/* 

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
*/


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
