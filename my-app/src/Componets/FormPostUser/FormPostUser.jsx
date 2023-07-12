import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUser, updateUser, getUserId } from "../../Redux/Actions";
import { ErrorForm, SuccedForm } from "../FormPostPet/AlertForm/AlertForm";
import { MdArrowBackIosNew } from "react-icons/md";
import logo from "../../assets/imagenes/logo_negro.png";
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
	InputGroup,
	InputRightElement,
	InputLeftAddon,
	Icon,
	Image,
} from "@chakra-ui/react";

//Regular expressions for mail
let isEmail = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
const validateForm = (input) => {
	let inputError = {};

	if (input?.name === "" || !input.name.length) {
		inputError.name = "Debes ingresar tu nombre";
	}
	if (input?.surname === "" || !input.surname.length) {
		inputError.surname = `Debes ingresar tu apellido`;
	}
	if (input?.email === "" || !input.email.length) {
		inputError.email = "Debes ingresar tu e-mail";
	} else if (!isEmail.test(input?.email)) {
		inputError.email = "ingresa formato de e-mail válido";
	}
	if (input.username === "" || !input.username.length) {
		inputError.username = "Debes ingresar un nombre de usuario";
	}
	if (input?.phone !== "" || !input.phone.length) {
		if (input.phone?.length !== 10) {
			inputError.phone = "Debe ser un numero de 10 digitos";
		}
	}
	return inputError;
};

export default function FormPostUser({ id, value }) {
	const navigate = useNavigate();
	const [usuario, setUsuario] = useState([]);
	const dispatch = useDispatch();
	const loggedUser = localStorage.getItem("loggedUser");
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const [inputError, setInputError] = useState({});
	const [input, setInput] = useState({
		name: "",
		surname: "",
		email: "",
		username: "",
		phone: "",
		role: "user",
	});
	useEffect(() => {
		const loggedUser = localStorage.getItem("loggedUser");
		if (loggedUser) {
			const logged = JSON.parse(loggedUser);
			setUsuario(logged);
		}
	}, []);
	useEffect(() => {
		if (value === "update" && usuario.length) dispatch(getUserId(usuario[0]?.id)); //del localStorage me traigo la info del usuario, desde su posicion 0 de array, por eso le pregunto si tiene algo con el "?", si tiene algo dentro que me traiga su id
	}, [dispatch, usuario]);

	const userInfo = useSelector((state) => state.user);

	useEffect(() => {
		if (value === "update")
			console.log("userInfo: ",userInfo);
			setInput({
				name: userInfo[0]?.name,
				surname: userInfo[0]?.surname,
				email: userInfo[0]?.email,
				username: userInfo[0]?.username,
				role: userInfo[0]?.role,
				phone: userInfo[0]?.phone
			});
	}, []);

	//Display login feedback
	const [isIncomplete, setIsIncomplete] = useState(false);
	const [infoSend, setInfoSend] = useState(false);

	const handlerChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value.trim(),
		});
		console.log("input", input);

		//control errores
		setInputError(
			validateForm({
				...input,
				[e.target.name]: e.target.value,
			})
		);
		console.log("input errer ", inputError, "inputError", inputError);
	};

	const handlerSubmit = (e, value) => {
		e.preventDefault();
		if (
			input.name &&
			input.surname &&
			input.email &&
			input.username &&
			input.phone
		) {
			/* handlerSubmit(e); */
			if (value === undefined) {
				dispatch(postUser(input));
				// navigate("/");
			} else {
				dispatch(updateUser(userInfo[0]?.id, input));
			}

			setIsIncomplete(false);
			setInfoSend(true);

			//borra todos los inputs pero no sé cómo será con el tema del form con put que trae info a rellenar, creo , asiq queda comentada!
			/*   document.getElementById("myForm").reset(); */
		} else {
			setIsIncomplete(true);
			setInfoSend(false);
		}
	};

	return (
		<div>
			{isIncomplete ? <ErrorForm /> : null}
			{infoSend ? <SuccedForm /> : null}

			<form id="myForm">
				<Flex
					minH={"100vh"}
					align={"center"}
					justify={"center"}
					bg="brand.green.200">
					<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
						{value === undefined ? (
							<Stack align={"center"}>
								<Text
									fontFamily="heading"
									fontWeight={"bold"}
									color="gray.600"
									fontSize={"5xl"}
									textAlign={"center"}
									textShadow={""}>
									Crea tu cuenta!
								</Text>
								<Text fontSize={"lg"} color={"gray.600"}>
									Gracias por cuidar a los animales ✌️
								</Text>
								<Box width={20} height={20}>
									<Image src={logo}></Image>
								</Box>
							</Stack>
						) : (
							<Stack align={"center"}>
								<Heading fontSize={"4xl"} textAlign={"center"}>
									Actualizá la información de perfil
								</Heading>
							</Stack>
						)}

						<Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
							<Stack spacing={4}>
								<HStack>
									<Box>
										<FormControl id="name" isRequired>
											<FormLabel>Nombre: </FormLabel>
											<Input
												autoComplete="off"
												type="text"
												value={input.name}
												name="name"
												key="name"
												focusBorderColor={"brand.green.300"}
												fontFamily={"body"}
												// value={input.name}
												onChange={(e) => handlerChange(e)}
											/>
											{inputError.name && (
												<Text className="text_inputError">
													{inputError.name}
												</Text>
											)}
										</FormControl>

										<FormControl id="surname" isRequired>
											<FormLabel>Apellido: </FormLabel>
											<Input
												autoComplete="off"
												value={input.surname}
												name="surname"
												type="text"
												key="surname"
												focusBorderColor={"brand.green.300"}
												fontFamily={"body"}
												onChange={(e) => handlerChange(e)}
											/>
											{inputError.surname && (
												<Text className="text_inputError">
													{inputError.surname}
												</Text>
											)}
										</FormControl>
									</Box>
								</HStack>

								<FormControl id="username" isRequired>
									<FormLabel>Apodo: </FormLabel>
									<Input
										autoComplete="off"
										name="username"
										value={input.username}
										key="username"
										type="text"
										focusBorderColor={"brand.green.300"}
										fontFamily={"body"}
										onChange={(e) => handlerChange(e)}
									/>
									{inputError.username && (
										<Text className="text_inputError">
											{inputError.username}
										</Text>
									)}
								</FormControl>

								<FormControl id="email" isRequired>
									<FormLabel>Email: </FormLabel>
									<Input
										autoComplete="off"
										name="email"
										type="text"
										value={input.email}
										key="email"
										placeholder="tumail@mail.com"
										focusBorderColor={"brand.green.300"}
										fontFamily={"body"}
										onChange={(e) => handlerChange(e)}></Input>
									{inputError.email && (
										<Text className="text_inputError">{inputError.email}</Text>
									)}
								</FormControl>

								{value === null ? null : (
									<FormControl id="password" isRequired>
										<FormLabel>Contraseña: </FormLabel>
										<InputGroup size="md">
											<Input
												autoComplete="off"
												placeholder="Ingresar una contraseña"
												name="password"
												key="password"
												focusBorderColor={"brand.green.300"}
												fontFamily={"body"}
												type={show ? "text" : "password"}
												onChange={(e) => handlerChange(e)}
											/>
											<InputRightElement width="4.5rem">
												<Button h="1.75rem" size="sm" onClick={handleClick}>
													{show ? "Hide" : "Show"}
												</Button>
											</InputRightElement>
											{inputError.password && (
												<Text>{inputError.password}</Text>
											)}
										</InputGroup>
									</FormControl>
								)}

								<FormControl id="phone" isRequired>
									<FormLabel>Cel/Teléfono:</FormLabel>
									<InputGroup size="sm">
										<InputLeftAddon
											bg="gray.50"
											_dark={{
												bg: "gray.800",
											}}
											color="gray.500"
											rounded="md">
											+54 9
										</InputLeftAddon>
										<Input
											autoComplete="off"
											type="number"
											name="phone"
											value={input.phone}
											focusBorderColor={"brand.green.300"}
											fontFamily={"body"}
											onChange={(e) => handlerChange(e)}
										/>
									</InputGroup>
									{inputError.phone && (
										<Text className="text_inputError">{inputError.phone}</Text>
									)}
								</FormControl>
								<Stack spacing={10} pt={2}>
									{value === undefined ? (
										<Button
											onClick={(e) => [handlerSubmit(e), window.scrollTo(0, 0)]}
											loadingText="Post mascota"
											fontFamily={"body"}
											size="lg"
											bg={"orange.300"}
											color={"white"}
											_hover={{
												bg: "orange.400",
											}}>
											Registrarse
										</Button>
									) : (
										<Button
											onClick={(e) => [
												handlerSubmit(e, value, id),
												window.scrollTo(0, 0),
											]}
											loadingText="Registrarse"
											fontFamily={"body"}
											size="lg"
											bg={"orange.300"}
											color={"white"}
											_hover={{
												bg: "orange.400",
											}}>
											Guardar cambios
										</Button>
									)}
								</Stack>
							</Stack>
						</Box>
						<Link to={value === "update" ? "/home" : "/"}>
							<Icon
								as={MdArrowBackIosNew}
								color="orange.400"
								boxSize={5}
								_hover={{
									color: "grey",
									boxSize: "7",
								}}
							/>
							<Icon
								as={MdArrowBackIosNew}
								color="orange.400"
								boxSize={5}
								_hover={{
									color: "grey",
									boxSize: "7",
								}}
							/>
							<Button
								fontFamily={"body"}
								bg="base.green.100"
								color={"grey"}
								_hover={{
									color: "orange.400",
								}}
								p="0"
								mr="1rem">
								{" "}
								Atrás
							</Button>
						</Link>
					</Stack>
				</Flex>
			</form>
		</div>
	);
}
