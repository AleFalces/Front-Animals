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






import {
	Box,
	Stack,
	Text,
	Input,
	Button,
	Divider,

} from '@chakra-ui/react';

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
							<Box as={'form'} mt={1}>
								<Stack spacing={4}>
									<Input
										type="email"
										name="email"
										bg={'gray.100'}
										placeholder="Ingresa tu Email"
										border={0}
										color={'gray.500'}
										_placeholder={{
											color: 'gray.500',
										}}
										onChange={handleChange}></Input>

									<Input
										type="password"
										name="password"
										bg={'gray.100'}
										placeholder="Ingresa tu contraseña"
										border={0}
										color={'gray.500'}
										_placeholder={{
											color: 'gray.500',
										}}
										onChange={handleChange}
									/>
								</Stack>

							</Box>
						</form>
						<Box py='1rem'>
							<Button
								onClick={handlerSubmit}
								className="formButtom"
								type="submit"
								fontFamily={"body"}
								size="lg"
								bg={"orange.300"}
								color={"white"}
								w='40%'
								px="3rem"
								_hover={{
									bg: "orange.400",
								}}
							>
								Ingresar
							</Button>
						</Box>
						<Box py='1rem'>
							<Text fontFamily={'body'}>No estás registrado?</Text>
							<Link to={`/createUser`}>
								<p>hazlo aquí</p>
							</Link>
						</Box>
					</div>


					<Divider
						orientation="horizontal"
						mt="1rem"
						pt="6px"
						bg="gray.200"
						borderRadius="7px"
					/>
					<Link />
					<Box mt="1rem">
						<Button fontFamily={"body"}
							size="lg"
							bg={"orange.300"}
							color={"white"}
							w='40%'
							px="3rem"
							_hover={{
								bg: "orange.400",
							}}

							onClick={() => loginWithRedirect()}>
							<Text fontSize='1rem'>Ingresar Con Google{" "}</Text>
						</Button>
					</Box>
				</div>
			)}
		</>
	);
};

export default Login;
