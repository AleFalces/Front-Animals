import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	HStack,
	Stack,
	Button,
	Heading,
	Text,
	//   useColorModeValue,
} from "@chakra-ui/react";

export default function FormPostUser({ value }) {
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
			if (input.phone.length !== 6) {
				errors.phone = "Debe ser un numero de 10 digitos";
			}
		}
		if (
			!errors.name &&
			!errors.surname &&
			!errors.email &&
			!errors.username &&
			!errors.phone
		) {
			handlerSubmit(e);
		} else {
			alert("Falta rellenar algun campo");
		}
	}

	const handlerChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value.trim(),
		});
		console.log("input", input);
		// console.log("error", errors);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		dispatch(postUser(input));
		alert("Usuario creado con éxito!");
	};

	return (
		<form>
			<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				//   bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					{value === undefined ? (
						<Stack align={"center"}>
							<Heading fontSize={"4xl"} textAlign={"center"}>
								Crear cuenta en Buddy
							</Heading>
						</Stack>
					) : (
						<Stack align={"center"}>
							<Heading fontSize={"4xl"} textAlign={"center"}>
								Actualizá la información de perfil
							</Heading>
						</Stack>
					)}

					<Box
						rounded={"lg"}
						//   bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}>
						<Stack spacing={4}>
							<HStack>
								<Box>
									<FormControl id="name" isRequired>
										<FormLabel>Nombre: </FormLabel>
										<Input
											type="text"
											name="name"
											key="name"
											//   value={input.name}
											onChange={(e) => handlerChange(e)}
										/>
										{errors.name && <Text>{errors.name}</Text>}
									</FormControl>
								</Box>

								<Box>
									<FormControl id="surname" isRequired>
										<FormLabel>Apellido: </FormLabel>
										<Input
											name="surname"
											type="text"
											key="surname"
											onChange={(e) => handlerChange(e)}
										/>
									</FormControl>
								</Box>
							</HStack>

							<FormControl id="username" isRequired>
								<FormLabel>Apodo: </FormLabel>
								<Input
									name="username"
									value={input.description}
									key="username"
									type="text"
									onChange={(e) => handlerChange(e)}
								/>
							</FormControl>

							<FormControl id="email" isRequired>
								<FormLabel>Email: </FormLabel>
								<Input
									name="email"
									type="text"
									value={input.email}
									key="email"
									onChange={(e) => handlerChange(e)}></Input>
							</FormControl>

							<FormControl id="password" isRequired>
								<FormLabel>Contraseña: </FormLabel>
								<Input
									placeholder="Ingresar una contraseña"
									name="password"
									key="password"
									type="password"
									onChange={(e) => handlerChange(e)}
								/>
							</FormControl>

							<FormControl id="phone" isRequired>
								<FormLabel>Cel/Teléfono:</FormLabel>
								<Input
									type="number"
									name="phone"
									value={input.phone}
									onChange={(e) => handlerChange(e)}
								/>
							</FormControl>
							<Stack spacing={10} pt={2}>
								{value === undefined ? (
									<Button
										onClick={(e) => handlerErrors(e)}
										loadingText="Registrar usuario"
										size="lg"
										bg={"blue.400"}
										color={"white"}
										_hover={{
											bg: "blue.500",
										}}>
										Registrarse
									</Button>
								) : (
									<Button
										onClick={(e) => handlerErrors(e)}
										loadingText="Guardar cambios"
										size="lg"
										bg={"blue.400"}
										color={"white"}
										_hover={{
											bg: "blue.500",
										}}>
										Guardar cambios
									</Button>
								)}
							</Stack>
						</Stack>
					</Box>
					<Link to={"/"}>
						<Button>Atrás</Button>
					</Link>
				</Stack>
			</Flex>
		</form>
	);
}
