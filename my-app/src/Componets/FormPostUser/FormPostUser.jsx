import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";

export default function FormPostUser() {
	const dispatch = useDispatch();

	useEffect(() => {}, []);
	const [input, setInput] = useState({
		name: "",
		surname: "",
		email: "",
		username: "",
		phone: "",
		role: "user",
	});
	const errors = {
		name: "",
		surname: "",
		email: "",
		username: "",
		phone: "",
	};

	const handlerChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value.trim(),
		});
		console.log("input", input);
		console.log("error", errors);
	};

	function handlerErrors(e) {
		e.preventDefault();
		if (input.name === "") {
			errors.name = "Debes ingresar tu nombre";
		}
		if (input.surname === "") {
			errors.surname = `Debes ingresar tu apellido`;
		}
		if (input.email === "") {
			errors.email = "Debes ingresar tu e-mail";
		}
		if (input.username === "") {
			errors.username = "Debes ingresar un nombre de usuario";
		}
		if (input.phone !== "") {
			if (input.phone.length !== 8) {
				errors.phone = "Debe ser un numero de 10 digitos";
			}
		}

		{
			alert("Falta rellenar algun campo");
		}
	}

	const handlerSubmit = (e) => {
		e.preventDefault();

		dispatch(postUser(input));
		alert("Usuario creado con éxito!");
	};

	return (
		<div>
			<form onSubmit={(e) => handlerErrors(e)}>
				<h1>Completa el formulario para crear tu usuario</h1>

				<div>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={(e) => handlerChange(e)}
						placeholder="Nicolas"
					/>
				</div>
				<div>
					<label>Apellido:</label>
					<input
						type="text"
						name="surname"
						placeholder="Fernandez"
						onChange={(e) => handlerChange(e)}
					/>
				</div>
				<div>
					<label>Nombre de usuario:</label>
					<input
						type="text"
						name="username"
						placeholder="NombreDeUsuario"
						onChange={(e) => handlerChange(e)}
					/>
				</div>
				<div>
					<label>E-mail:</label>
					<input
						type="text"
						name="email"
						placeholder="ejemplo@gmail.com"
						onChange={(e) => handlerChange(e)}
					/>
				</div>
				<div>
					<label>Telefono:</label>
					<input
						type="number"
						name="phone"
						placeholder="11 2233-2233 (solo numeros) "
						onChange={(e) => handlerChange(e)}
					/>
				</div>
				<Link to={"/home"}>
					<button>Atras</button>
				</Link>
				<button onClick={(e) => handlerSubmit(e)}>Registrarse</button>
			</form>
		</div>
	);
}
