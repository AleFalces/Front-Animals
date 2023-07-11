import React, { useState, useEffect } from "react";
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
	Box, Stack, Text, Input, Button, Divider, Center
} from "@chakra-ui/react";

function validateForm(input) {
	let inputErrors = {}
	// const navigate = useNavigate() // Lo movi a la funcion de abajo
	
	if (input.password === "") {
		inputErrors.password = `Debes ingresar tu contraseña`;
	}
	if (input.email === "") {
		inputErrors.email = "Debes ingresar tu e-mail";
	}
	return inputErrors
}


const Login = ({ loggedUser, handleSetUserFlag }) => {
	const navigate = useNavigate()
	const { loginWithRedirect, logout } = useAuth0();
	// const navigate = useNavigate();
	const [usuario, setUsuario] = useState([]);
	const [inputErrors, setInputErrors] = useState({});
	const [input, setInput] = useState({
		email: "",
		password: "",
	});



	
	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		
		//control errors
		setInputErrors(
			validateForm({
				...input,
				[e.target.name]: e.target.value,
			})
			);
	};
	
	const cerrarSesion = () => {
		localStorage.removeItem("loggedUser");
		// logout(); //! LOGOUT DE AUTH0
		console.log("Ejecutando 'handleSetUserFlag' en fn 'cerrarSesion' LOGIN.jsx");
		handleSetUserFlag()
		navigate("/")
	};

	useEffect(() => {
		const loggedUser = localStorage.getItem("loggedUser");
		if (loggedUser) {
			const logged = JSON.parse(loggedUser);
			setUsuario(logged);
		}
	}, []);
	
	const loginPost = async (formData) => {
		try {
			console.log("LOGIN POST ENTRÉ: formData", formData);
			let login = await axios.post(
				"http://localhost:3001/users/login",
				formData
			);
				console.log("LOGINPOST: ",login);
			if (login.data.length > 0) {        //! NO SERÍA >0 EN VEZ DE >=0 ???????????????????
				localStorage.setItem("loggedUser", JSON.stringify(login.data)); //! ACÁ ESTÁ EL USUARIO[0] MOLESTO
				handleSetUserFlag()
				alert("Usuario logueado");
				navigate("/home");
			} else {    //! CREO QUE NO ESTÁ HACIENDO NADA
				alert("Ingrese usuario y contraseña")    //! CREO QUE NO ESTÁ HACIENDO NADA
			}    //! CREO QUE NO ESTÁ HACIENDO NADA
		} catch (err) {
			alert("Su usuario o contraseña son incorrectos");
		}
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (input.email && input.password) {
			loginPost({ ...input });
		} else {
			alert("Debes ingresar tu e-mail y contraseña");
		}
	}



	return (
		<>
			{usuario.length > 0 ? (
				<Box w={"100%"}>
					<Button 
						_hover={{
							bg: "red.600",
						}} 
						color={"#fff"} 
						bg={"red.500"} 
						w={"90%"} 
						onClick={() => cerrarSesion()}>
					Cerrar Sesion
					</Button>
					<Button
						_hover={{
							bg: "orange.400",
						}} 
						color={"#fff"} 
						bg={"orange.300"} 
						w={"90%"} 
						mt={"1rem"}
						onClick={() => navigate("/home")}>
						Ir al home
					</Button>
				</Box>
			) : (
				<div>
					{" "}
					<div>
						<form>
							<Box as={"form"} mt={1}>
								<Stack spacing={4}>
									<Input
										type="email"
										name="email"
										bg={"gray.100"}
										focusBorderColor={"brand.green.300"}
										placeholder="Ingresa tu Email"
										border={1}
										color={"gray.500"}
										_placeholder={{
											color: "gray.500",
										}}
										onChange={handleChange}></Input>
									{inputErrors.email && (<Text className="text_inputError" fontSize={'0.8rem'}>{inputErrors.email}</Text>)}

									<Input
										type="password"
										name="password"
										bg={"gray.100"}
										focusBorderColor={"brand.green.300"}
										placeholder="Ingresa tu contraseña"
										border={1}
										color={"gray.500"}
										_placeholder={{
											color: "gray.500",
										}}
										onChange={handleChange}
									/>{inputErrors.password && (<Text className="text_inputError" fontSize={'0.8rem'}>{inputErrors.password}</Text>)}
								</Stack>
							</Box>
						</form>
						<Box py="1rem">
							<Button
								onClick={handlerSubmit}

								type="submit"
								fontFamily={"body"}
								size="lg"
								bg={"orange.300"}
								color={"white"}
								w="40%"
								px="3rem"
								_hover={{
									bg: "orange.400",
								}}>
								Ingresar
							</Button>
						</Box>
						<Box py="1rem">
							<Text fontFamily={"body"}>No estás registrado?</Text>
							<Link to={`/createUser`} >
								<Text _hover={{
									color: "brand.green.300",
									fontWeight: 'bold'
								}}>hazlo aquí</Text>

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
						<Button
							fontFamily={"body"}
							size="lg"
							bg={"orange.300"}
							color={"white"}
							w="40%"
							px={{ base: "6rem", sm: "6rem", md: "6rem", lg: "6rem" }}
							_hover={{
								bg: "orange.400",
							}}
							onClick={() => loginWithRedirect()}>
							<Text
								fontSize={{ base: "16px", sm: "16px", md: "16px", lg: "1rem" }}>
								Ingresar Con Google{" "}
							</Text>
						</Button>
					</Box>
					<Divider
						orientation="horizontal"
						mt="1rem"
						pt="6px"
						bg="gray.200"
						borderRadius="7px"
					/>
					<Center>
						<Box
							py="1rem"
							mt="1rem"
							borderRadius={7}
							color={"brand.green.300"}
							size="lg"
							w="50%"
							px="1rem"
							_hover={{
								bg: "orange.100",
								fontWeight: 'bold'
							}}>
							<Link to={`/home`}>
								<Text
									fontFamily={"body"}
									fontSize='1.2rem'
									_hover={{
										color: "brand.green.300",

									}}>
									Usuario invitado
								</Text>
							</Link>
						</Box>
					</Center>
				</div>
			)}
		</>
	);
};

export default Login;
