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