import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormPostUser } from "../FormPostUser/FormPostUser";
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
		form: { email: "", password: "" },
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const loginPost = async (formData) => {
		try {
			const loginUser = await axios.post(
				"http://localhost:3001/users",
				formData
			);
			console.log(loginUser);
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navegate("/home");
		loginPost({ ...input });
	};

	console.log(input);
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
								value={input.name}
								onChange={handleChange}></input>

							<input
								type="password"
								name="password"
								placeholder="Contraseña"
								value={input.password}
								onChange={handleChange}
							/>
						</form>
						<button className="formButtom" type="submit">
							Ingresar
						</button>
						<Link to={`/createUser`}>
							<p>Registrar Usuario</p>
						</Link>
					</div>
					<Link />
					<button
						onSubmit={handleSubmit}
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
