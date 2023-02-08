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

export default function Simple() {
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
	useEffect(() => {
		dispatch(getUserId(usuario[0]?.id)); //del localStorage me traigo la info del usuario, desde su posicion 0 de array, por eso le pregunto si tiene algo con el "?", si tiene algo dentro que me traiga su id
	}, [dispatch, usuario]);

	const cerrarSesion = () => {
		localStorage.removeItem("loggedUser");
		logout();
	};
	const userPhone = (e) => {
		e.preventDefault();
		if (userInfo[0]?.phone === "123456789") {
			navigate("/updateUser");
			alert("Actualiza tu telefono para publicar");
		} else {
			navigate("/createPet");
		}
	};

	return (
		<>
			<Box bg="brand.green.100" px={100} py="10px">
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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
									boxSize="70px"
									mx="2rem"
									mt="1rem"
								/>
							</NavLink>
						</Box>

						<HStack
							as={"nav"}
							spacing={8}
							display={{ base: "none", md: "flex" }}
							padding="140px">
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
								<Text fontFamily={"body"}>Nosotros</Text>
							</NavLink>
							<NavLink
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								to="/donate"
								variant="custom">
								<Text fontFamily={"body"}>Donaciones</Text>
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
								<Text fontFamily={"body"}>Tienda</Text>
							</NavLink>
							<NavLink
								onClick={(e) => userPhone(e)}
								px={2}
								py={1}
								rounded={"md"}
								_hover={{
									textDecoration: "none",
									bg: useColorModeValue("gray.200", "gray.700"),
								}}
								to="/createPet"
								variant="custom">
								<Text fontFamily={"body"}>Publicar Mascota</Text>
							</NavLink>
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
								<Text fontFamily={"body"}>Veterinarias</Text>
							</NavLink>

							<Menu>
								<MenuButton>
									<GiSittingDog size="20px" />
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
									size={"sm"}
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
									<NavLink to="/">Ingresar</NavLink>
								)}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} p={4} spacing={4} alignItems={"center"}>
							<NavLink to="/aboutUs">
								<Text fontFamily={"body"}>Nosotros</Text>
							</NavLink>
							<NavLink to="/donate">
								<Text fontFamily={"body"}>Donaciones</Text>
							</NavLink>
							<NavLink to="/shop">
								<Text fontFamily={"body"}>Tienda</Text>
							</NavLink>
							<NavLink to="/createPet">
								<Text fontFamily={"body"}>Publicar Mascota</Text>
							</NavLink>
							<NavLink to="/veterinary">
								<Text fontFamily={"body"}>Veterinarias</Text>
							</NavLink>
							<Menu>
								<MenuButton>
									<GiSittingDog size="20px" />
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
