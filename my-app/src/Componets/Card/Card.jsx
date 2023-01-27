import React from "react";
import "./Card.css";

const Card = ({ data: { size, img, sex, species, age } }) => {
  return (
    <div className="card2">
      <div className="face front">
        <img src={img} alt="img not found" />
      </div>
      <div className="face back">
        <h3>Sexo: {sex}</h3>
        <h3>Especie: {species}</h3>
        <h3>Tamaño {size}</h3>
        <h3>Edad: {age}</h3>
        <div className="link2">
          <a href="#">Click for details</a>
        </div>
      </div>
    </div>
  );
};


export default Card;

