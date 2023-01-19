import React from "react";

export const Card = ({ data: { Nombre, Imagen, Tipo } }) => {
	return (
		<div className="Card">
			<img className="Img" src={Imagen} alt={Nombre} />
			<div className="TextCard">
				<p className="TextCard">Nombre:{Nombre}</p>
				<p className="TextCard">Tipo:{Tipo}</p>
			</div>
		</div>
	);
};
