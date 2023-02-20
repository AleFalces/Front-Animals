import logo from "../../assets/imagenes/logo_negro.png";
import { useAuth0 } from "@auth0/auth0-react";
import { GiSittingDog } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../Redux/Actions";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	// Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Image,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Navbar({ handleSetUserFlag }) {
	// console.log("handleSetUserFlag, Navbar SIMPLE: ",handleSetUserFlag);
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { user, isAuthenticated, logout } = useAuth0();
	const [usuario, setUsuario] = useState([]);
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.user);



	useEffect(() => {
		const loggedUser = localStorage.getItem("loggedUser");
		if (loggedUser) {
			const logged = JSON.parse(loggedUser);
			setUsuario(logged);
		}
	}, []);

	// if (!userInfo?.length) {
	// 	dispatch(getUserId(usuario[0]?.id));
	// }

	useEffect(() => {
		dispatch(getUserId(usuario[0]?.id)); //del localStorage me traigo la info del usuario, desde su posicion 0 de array, por eso le pregunto si tiene algo con el "?", si tiene algo dentro que me traiga su id
	}, [dispatch, usuario]);

	const cerrarSesion = () => {
		localStorage.removeItem("loggedUser");
		// logout();
		console.log("seteando el usuario en null");
		setUsuario(null)
		console.log("Ejecutando 'handleSetUserFlag' en boton 'Cerrar Sesion' de Navbar");
		handleSetUserFlag();
		navigate("/")
	};

	const userPhone = (e) => {
		e.preventDefault();
		console.log(userInfo);
		if (userInfo[0]?.phone === "123456789") {
			navigate("/updateUser");
			alert("Actualiza tu telefono para publicar");
		} else {
			navigate("/createPet");
		}
	};

	const userAuth = (e) => {
		e.preventDefault();
		alert("Para publicar tu mascota Ingresa tu usuario");
		navigate("/");
	};

	return (
		<>
			<Box bg="brand.green.100" px={"2rem"} py="2rem">
				<Flex h={16} alignItems={"center"} justifyContent={"space-evenly"}>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={"center"}>
						<Box>
							<NavLink to="/home">
								<Image
									src={logo}
									// alt="Dan Abramov"
									boxSize="6rem"
									mx="2rem"
									my="1rem"
									_hover={{
										opacity: "0.5",
									}}
								/>
							</NavLink>
						</Box>

						<HStack
							as={"nav"}
							spacing={8}
							display={{ base: "none", md: "flex" }}
							padding="3rem">
							<NavLink
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								to="/aboutUs"
								variant="custom">
								<Text
									fontSize="1.3rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Nosotros
								</Text>
							</NavLink>
							<NavLink
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									color: "brand.green.300",
								}}
								to="/donate"
								variant="custom">
								<Text
									fontSize="1.3rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Donaciones
								</Text>
							</NavLink>
							<NavLink
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								to="/shop"
								variant="custom">
								<Text
									fontSize="1.3rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Tienda
								</Text>
							</NavLink>
							{!usuario?.length ? (
								<NavLink
									onClick={(e) => userAuth(e)}
									px={2}
									py={1}
									rounded={"md"}
									_hover={{
										textDecoration: "none",
										// bg: useColorModeValue("gray.200", "gray.700"),
									}}
									to="/createPet"
									variant="custom">
									<Text
										fontSize="1.3rem"
										fontFamily={"body"}
										_hover={{
											fontWeight: "bold",
											color: "brand.green.300",
										}}>
										Publicar Mascota
									</Text>
								</NavLink>
							) : (
								<NavLink
									onClick={(e) => userPhone(e)}
									px={2}
									py={1}
									rounded={"md"}
									_hover={{
										textDecoration: "none",
										// bg: useColorModeValue("gray.200", "gray.700"),
									}}
									to="/createPet"
									variant="custom">
									<Text
										fontSize="1.3rem"
										fontFamily={"body"}
										_hover={{
											fontWeight: "bold",
											color: "brand.green.300",
										}}>
										Publicar Mascota
									</Text>
								</NavLink>
							)}
							<NavLink
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								to="/veterinary"
								variant="custom">
								<Text
									fontSize="1.3rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Veterinarias
								</Text>
							</NavLink>

							<Menu>
								<MenuButton
									fontSize={"1.3rem"}
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									{/* <GiSittingDog size="2rem" /> ICONO DEL PERRITO LO SAQUÉ*/}
									Mascotas
								</MenuButton>
								<MenuList>
									<MenuItem>
										<NavLink to="/adoptions">
											<Text fontFamily={"body"}>Adopcion</Text>
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink to="/lostPets">
											<Text fontFamily={"body"}>Perdidos</Text>
										</NavLink>
									</MenuItem>
								</MenuList>
							</Menu>
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}>
								<Avatar
									size={"md"}
									borderBlockEndColor={"brand.orange"}
									src={
										isAuthenticated
											? user?.picture
											: "https://st2.depositphotos.com/19428878/44645/v/450/depositphotos_446453832-stock-illustration-default-avatar-profile-icon-social.jpg"
									}
								/>
							</MenuButton>
							<MenuList>
								<NavLink to="/dashboard">
									<MenuItem
										hidden={usuario[0]?.role === "admin" ? false : true}>
										Administrar cuenta
									</MenuItem>
								</NavLink>
								<MenuDivider />
								{usuario.length ? (
									<MenuList>
										<NavLink to="/updateUser">
											<MenuItem>Modifica tus datos</MenuItem>
										</NavLink>

										<NavLink to="/myPets">
											<MenuItem>Mis mascotas</MenuItem>
										</NavLink>
										<MenuItem onClick={() => cerrarSesion()}>
											{" "}
											Cerrar Sesión
										</MenuItem>
									</MenuList>
								) : (
									<NavLink onClick={()=>{handleSetUserFlag()}} to="/">Ingresar</NavLink>
								)}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={1} display={{ md: "none" }}>
						<Stack as={"nav"} p={5} spacing={6} alignItems={"center"}>
							<NavLink to="/aboutUs">
								<Text
									fontSize="1.2rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Nosotros
								</Text>
							</NavLink>
							<NavLink to="/donate">
								<Text
									fontSize="1.2rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Donaciones
								</Text>
							</NavLink>
							<NavLink to="/shop">
								<Text
									fontSize="1.2rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Tienda
								</Text>
							</NavLink>
							<NavLink to="/createPet">
								<Text
									fontSize="1.2rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Publicar Mascota
								</Text>
							</NavLink>
							<NavLink to="/veterinary">
								<Text
									fontSize="1.2rem"
									fontFamily={"body"}
									_hover={{
										fontWeight: "bold",
										color: "brand.green.300",
									}}>
									Veterinarias
								</Text>
							</NavLink>
							<Menu>
								<MenuButton>
									<GiSittingDog size="2rem" />
								</MenuButton>
								<MenuList>
									<MenuItem>
										<NavLink to="/adoptions">
											<Text fontFamily={"body"}>Adopcion</Text>
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink to="/lostPets">
											<Text fontFamily={"body"}>Perdidos</Text>
										</NavLink>
									</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
