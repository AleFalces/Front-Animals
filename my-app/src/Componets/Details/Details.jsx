import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
/* import "./Detail.css"; */

// import { extendTheme } from "@chakra-ui/react";

import {
	Box,
	Heading,
	Center,
	Text,
	Image,
	IconButton,
	Icon,
	Avatar,
	Wrap,
	WrapItem,
	SimpleGrid,
	Divider,
	Container,
	Stack,
	HStack,
	VStack,
} from "@chakra-ui/react";

import { GiSittingDog } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";

const messages = [
	"Asegúrate de tener suficiente espacio y tiempo para dedicar al cuidado del animal.",
	" Debes estar dispuesto a asumir la gran responsabilidad de cuidar y brindar amor a un animal por el resto de su vida.",
	"Compatibilidad con tu estilo de vida: Considera si tu horario de trabajo, viajes, etc. son compatibles con el cuidado de un animal.",
	"Preparación para la llegada: Prepara tu hogar para la llegada del animal, con un lugar cómodo para dormir, juguetes y alimentación adecuada.",
];

const titulo = [
	"Espacio y tiempo disponible",
	"Responsabilidades a largo plazo",
	"Compatibilidad con tu estilo de vida",
	"Preparación para la llegada",
];
const features = messages.map(function (x, i) {
	return {
		id: i,
		title: titulo[i],
		text: messages[i],
	};
});

const Details = () => {
	const dispatch = useDispatch();
	const { paramsId } = useParams();
	const Det = useSelector((state) => state.Detail);
	// const userNumber = useSelector(state)=> state.
	const userNumber = 543534787713;

	useEffect(() => {
		dispatch(petDetails(paramsId));
	}, [dispatch, paramsId]);

	return (
		<div className="detailContainer">
			<Navbar />
			{window.scrollTo(0, 0)}
			<Box bg="brand.green.200" pb={["1rem", "2rem", "2rem"]}>
				<SimpleGrid columns={[1, 1, 2, 2]} spacing={["10px", "10px", "30px"]}>
					{/* Info1 Titulos*/}
					<Center w="100%" h="100%">
						<Box
							height="300px"
							w={[250, 400, 600]}
							pl="2"
							ml={["1rem", "0rem", "6rem"]}
							mt={["1rem", "0rem", "4rem"]}
							pt={["8rem", "6rem", "2rem"]}
							borderRadius="15px">
							{/*  Info1  */}
							<Heading
								as="h1"
								size="3xl"
								textTransform="uppercase"
								color="gray.500">
								{Det.species}{" "}
							</Heading>
							<Heading
								as="h2"
								size="lg"
								textTransform="uppercase"
								color="gray.500">
								{Det.sex}{" "}
							</Heading>
							<Box pt="0px">
								{" "}
								{Det.species === "perro" ? (
									<Icon
										as={GiSittingDog}
										color="orange"
										boxSize={14}
										mt="1rem"
									/>
								) : (
									<Icon as={GiCat} color="orange" boxSize={14} mt={"1rem"} />
								)}
							</Box>

							<Divider
								orientation="horizontal"
								mt="2rem"
								pt="5px"
								bg="gray.200"
								borderRadius="7px"
							/>
						</Box>
					</Center>

					{/* Imagen */}
					<Center w="100%">
						<Box
							height="300px"
							w={[600, 600, 700]}
							ml={["0rem", "1rem", "1rem"]}
							mt={["0rem", "0rem", "1rem"]}
							pt={["0rem", "5rem", "1rem"]}>
							<Center w="100%" h="100%">
								<Image
									src={Det.img}
									alt="dogs"
									borderRadius="50px"
									objectFit="cover"
									w="60%"
								/>
							</Center>
						</Box>
					</Center>
				</SimpleGrid>

				{/*  Info2 Detail */}
				<SimpleGrid
					columns={[1, 1, 1, 2]}
					spacing={["20px", "20px", "30px"]}
					mt="3rem">
					<Center>
						<Box
							bg="brand.green.200"
							boxShadow={"2xl"}
							rounded={"md"}
							overflow={"hidden"}
							height={["400px", "300px", "340px"]}
							w={[250, 400, 700]}
							borderRadius="15px"
							ml={["1rem", "1rem", "3rem"]}
							my={["0rem", "2rem", "0rem"]}
							pb="1rem">
							{/* Título sec. info */}
							<Heading as="h4" size="lg" pt="2rem" color="gray.600">
								{" "}
								Un poco sobre mi
							</Heading>

							{/* DETAIL */}
							<Container>
								<Text
									fontFamily={"body"}
									fontWeight={"300"}
									/* noOfLines={[4, 4, 3]} */
									px="1rem"
									py={["2rem", "1rem", "2rem"]}
									my="0rem"
									fontSize={{ base: "14px", md: "18px", lg: "20px" }}
									color="gray.500">
									{Det.detail}
								</Text>
							</Container>
							{/* AGE */}
							<Text
								noOfLines={[1, 2, 3]}
								fontSize={{ base: "14px", md: "18px", lg: "18px" }}
								color="orange.500"
								textTransform={"uppercase"}
								fontFamily={"heading"}
								fontWeight="bold"
								pb={["0rem", "0rem", "1rem"]}>
								{Det.age}
							</Text>

							{/* Area */}
							<Text
								fontFamily={"body"}
								fontWeight={"300"}
								noOfLines={[2, 2, 3]}
								fontSize={{ base: "14px", md: "16px", lg: "18px" }}
								color="gray.500"
								py={["3rem", "2rem", "0rem"]}>
								Se encuentra en la zona de:{" "}
								<Text
									color="orange.500"
									textTransform={"uppercase"}
									fontFamily={"heading"}
									fontWeight="bold">
									{Det.area}{" "}
								</Text>
							</Text>
						</Box>
					</Center>

					{/*  Info3  Contact */}
					<Center w="100%">
						<Box
							bg="orange.100"
							boxShadow={"2xl"}
							rounded={"md"}
							overflow={"hidden"}
							height="300px"
							w={[250, 300, 400]}
							borderRadius="15px"
							ml={{ md: "0rem", lg: "1rem" }}
							mt={["2rem", "2rem", "0rem"]}>
							{/* Little photos */}
							<Center w="100%">
								<Wrap m="1rem" mt="1rem" pt="1rem">
									<WrapItem>
										<Avatar size="lg" name={Det.species} src={Det.img} />{" "}
									</WrapItem>
									<WrapItem>
										<Avatar size="lg" name={Det.species} src={Det.img} />{" "}
									</WrapItem>
									<WrapItem>
										<Avatar size="lg" name={Det.species} src={Det.img} />{" "}
									</WrapItem>
								</Wrap>
							</Center>

							<Heading as="h4" size="sm" pt="2rem">
								{" "}
								Puedes contactarme!
							</Heading>
							<IconButton
								as="a"
								colorScheme="teal"
								aria-label="Call Segun"
								target="_blank"
								size="lg"
								px="3rem"
								mt="1rem"
								href={`https://wa.me/${userNumber}`}
								icon={<PhoneIcon />}
							/>
						</Box>
					</Center>
				</SimpleGrid>

				{/* Adoption Tips */}
				<Box p={4} pt="3rem" bg="white" mt="6rem" pb="4rem">
					<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
						<Heading fontSize={"3xl"}>
							Antes de adoptar, tené en cuenta estos consejos
						</Heading>
						<Text color={"gray.600"} fontSize={"xl"}>
							Leelos y ten en cuenta cada aspecto, la buena relación con las
							mascotas, su felicidad y salud dependen de estos factores, por
							favor no los pases por alto y ten en cuenta qué puede cumplir y
							que no a la hora de alojar un futuro miembro de tu familia!
						</Text>
					</Stack>

					<Container maxW={"6xl"} mt={10}>
						<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
							{features.map((feature) => (
								<HStack key={feature.id} align={"top"}>
									<Box color={"green.400"} px={2}>
										<Icon as={CheckIcon} />
									</Box>
									<VStack align={"start"}>
										<Text fontWeight={600}>{feature.title}</Text>
										<Text color={"gray.600"}>{feature.text}</Text>
									</VStack>
								</HStack>
							))}
						</SimpleGrid>
					</Container>
				</Box>
			</Box>
			<Footer />
		</div>
	);
};

export default Details;
