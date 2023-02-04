import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { User } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// <button className="btn btn-success" onClick={() => loginWithRedirect()}>
//   Login{" "}
// </button>
// <button className="btn btn-danger" onClick={() => logout()}>
//   Cerrar Sesion
// </button>

const Login = () => {
	const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
	const navegate = useNavigate();

	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	console.log(input);
	const loginPost = async (formData) => {
		try {
			let login = await axios
				.post("http://localhost:3001/users/login", formData)
				.then(({ data }) => {
					localStorage.setItem("loggedUser", JSON.stringify(data));
					navegate("/home");
					alert("Usuario Logueado");
				})
				.catch(({ response }) => {
					alert(response.data);
				});
			console.log(login);
		} catch (err) {
			return err.message;
		}
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		loginPost({ ...input });
	};

	return (
		<>
			{isAuthenticated ? (
				<button className="btn btn-danger" onClick={() => logout()}>
					Cerrar Sesion
				</button>
			) : (
				<div>
					{" "}
					<div>
						<form>
							<input
								type="email"
								name="email"
								placeholder="Ingrese su Email"
								onChange={handleChange}></input>

							<input
								type="password"
								name="password"
								placeholder="Ingrese su contraseña"
								onChange={handleChange}
							/>
						</form>
						<button
							onClick={handlerSubmit}
							className="formButtom"
							type="submit">
							Ingresar
						</button>
						<Link to={`/createUser`}>
							<p>Registrar Usuario</p>
						</Link>
					</div>
					<Link />
					<button
						className="btn btn-success"
						onClick={() => loginWithRedirect()}>
						Ingresar Con Google{" "}
					</button>
				</div>
			)}
		</>
	);
};

export default Login;
