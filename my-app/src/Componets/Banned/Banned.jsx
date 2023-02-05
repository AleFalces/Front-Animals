import React from "react";
import img5 from "../../assets/imagenes/img5.png";
import { useAuth0 } from "@auth0/auth0-react";

const Banned = () => {
	const { logout } = useAuth0();
	const cerrarSesion = () => {
		localStorage.removeItem("loggedUser");
		logout({ returnTo: "/" });
	};

	return (
		<div>
			<div className="contenedor-notFound">
				<h2 className="texto-NotFound">
					Su cuenta se encuentra bloqueada, pongase en contacto con el Admin
				</h2>
				<button onClick={() => cerrarSesion()}>Cerrar Sesión</button>
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
		</div>
	);
};

export default Banned;
