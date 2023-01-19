import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Navbar/Navbar";
import { Card } from "../Card/Card";
import { getAllPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";

export const Adoption = () => {
	const allPets = useSelector((state) => state.allPets);
	const Pets = [
		{
			id: 1,
			Tipo: "Perro",
			Nombre: "Pascual",
			Observacion: "Esta mal",
			Ubicacion: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			Imagen:
				"https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
		},
		{
			id: 4,
			Tipo: "Gato",
			Nombre: "Icaro",
			Observacion: "Es un gatico cachorro que esta en la calle",
			Ubicacion: "Esta en belen  por los lados de  la udem",
			Rasgos: "Es pequeño  y el pelo lo tiene negro",
			Imagen:
				"http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg",
		},
		{
			id: 2,
			Tipo: "Perro",
			Nombre: "Sacha",
			Observacion: "Tiene un ojo  herido",
			Ubicacion: "Esta en aranjuez por el parque",
			Rasgos: "Es un perro criollo y tiene un ojo spr herido",
			Imagen:
				"http://www.cuidadosdemascotas.com/wp-content/uploads/2015/06/perro_herido_cuidados_mascotas-300x225.jpg",
		},
		{
			id: 5,
			Tipo: "Gato",
			Nombre: "Nica",
			Observacion: "Es una gatica que acabo de dar a luz",
			Ubicacion: "Parque del poblado",
			Rasgos: "Es una gata blanca y tiene 6 gaticos cachorros",
			Imagen:
				"https://lh4.googleusercontent.com/-PKoAqrneSVg/TyPbkz9VqDI/AAAAAAAAAZg/QycSgXbOPUM/s800/Familia%2520de%2520gatos%2520Korat%2520%2528Gato%2520de%2520la%2520suerte%252C%2520Gat%2520Korat%252C%2520Si-sawaat%252C%2520Gat%2520de%2520la%2520Sort%252C%2520Korat-Katze%252C%2520Gatto%2520Korat%2529.jpg",
		},
		{
			id: 6,
			Tipo: "Pajaro",
			Nombre: "Cantor",
			Observacion: "Tiene una ala aproriada",
			Ubicacion: "Esta en prometeo",
			Rasgos: "Es un pechi rojo",
			Imagen:
				"https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/07/como-curar-pajaro-herido-euroresidentes.jpg",
		},
		{
			id: 1,
			Tipo: "Perro",
			Nombre: "Pascual",
			Observacion: "Esta mal",
			Ubicacion: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			Imagen:
				"https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
		},
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPets());
	}, []);

	return (
		<>
			<Navbar />
			<div>
				{!Pets?.length ? (
					<p>No hay mascotas</p>
				) : (
					Pets?.map((el) => (
						<Link to={`/pets/${el.id}`} key={el.id}>
							<Card data={el} />
						</Link>
					))
				)}
			</div>
		</>
	);
};
