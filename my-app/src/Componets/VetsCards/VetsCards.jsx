import React from "react";

const VetsCard = ({ data: { img, name, phone, address, dirección } }) => {
  return (
    <div className="card2">
      <div className="face front">
        <img src={img} alt="img not found" width={200} />
      </div>
      <div className="face back">
        <h3> {name}</h3>
        <h3>Telefono: {phone}</h3>
        <h3>Dirección: {address}</h3>
        <h3>Email: {dirección}</h3>
        <div className="link2">
          <a href="#">Click for details</a>
        </div>
      </div>
    </div>
  );
};

export default VetsCard;
