import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import img5 from "../../assets/imagenes/img5.png";

const NotFound = () => {
	const navigate = useNavigate();
	const redirect = () => setTimeout(() => navigate("/home"), 5000);

	useEffect(() => {
		redirect();
	}, []);
	return (
		<div>
			<Navbar />
			<div className="contenedor-notFound">
				<h2 className="texto-NotFound">
					Ups.. Ruta no encontrada, redirigiendo a Home en 5 segundos..
				</h2>
				<img className="d-block w-100 edit" src={img5} alt="First slide" />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
