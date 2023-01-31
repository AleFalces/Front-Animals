import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
/* import "./Detail.css"; */

import { extendTheme } from "@chakra-ui/react";

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
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";

const messages = [
  "Debes asegurarte que tu casa es un lugar seguro apra mascotas pequeñas, tener cuidado con espacios como balcón y de gran altura",
  "Debes disponer de tiempo para tu mascota, el animal no puede pasar grandes períodos de tiempo solo, sobre todo perros que recién han sido adoptados, en el caso de gatos, no es tan estrícto",
  "Mensaje 3",
  "Mensaje 4",
  "Mensaje 5",
];

const features = messages.map(function (x, i) {
  return {
    id: i,
    title: "Título",
    text: messages[i],
  };
});

const Details = () => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const Det = useSelector((state) => state.Detail);
  // const userNumber = useSelector(state)=> state.
  const userNumber = 543513470210;

  useEffect(() => {
    dispatch(petDetails(paramsId));
  }, [dispatch]);

  return (
    <div className="detailContainer">
      <Navbar />

      <Box bg="brand.green.200" mt="1rem" pb="4rem">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={["20px", "20px", "30px"]}>
          {/* Info1 Titulos*/}
          <Center w="100%" h="100%">
            <Box
              /* bg="brand.green.100" */ height="300px"
              w={[250, 400, 600]}
              pl="2"
              pt="5rem"
              ml="6rem"
              mt="4rem"
              borderRadius="15px"
            >
              {/*  Info1  */}
              {/* <GridItem pl='2' area={'info1'} py='3rem' mt="2rem" borderRadius='15px'> */}
              <Heading as="h1" size="3xl" textTransform="uppercase">
                {Det.species}{" "}
              </Heading>
              <Heading as="h2" size="lg" textTransform="uppercase">
                {Det.sex}{" "}
              </Heading>
              <Icon as={GiSittingDog} color="orange" boxSize={14} mt="1rem" />
              {/* </GridItem> */}
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
              w={[400, 500, 700]}
              ml={{ sm: "0rem", md: "0rem", lg: "2rem" }}
              pt={{ md: "0rem", lg: "3rem" }}
            >
              <Center w="100%" h="100%">
                <Image
                  src={Det.img}
                  alt="dogs"
                  borderRadius="50px"
                  objectFit="cover"
                  w="60%"
                  mt="1rem"
                />
              </Center>
            </Box>
          </Center>
        </SimpleGrid>

        {/* Segunda sección se SimpleGrid*/}
        {/*  Info2 */}
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          spacing={["20px", "20px", "30px"]}
          mt="3rem"
        >
          <Center w="100%" /* pl="5rem" */>
            <Box
              bg="brand.green.200"
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              height="300px"
              w={[250, 400, 700]}
              borderRadius="15px"
              ml={["2rem", "2rem", "7rem"]}
            >
              <Heading as="h4" size="lg" pt="2rem">
                {" "}
                Un poco sobre mi
              </Heading>
              <Text
                fontFamily={"body"}
                fontWeight={"300"}
                noOfLines={[2, 2, 3]}
                pt="1rem"
                fontSize={{ base: "12px", md: "18px", lg: "23px" }}
              >
                {Det.detail}
              </Text>
              <Text
                noOfLines={[1, 2, 3]}
                fontWeight={"300"}
                fontSize={{ base: "12px", md: "18px", lg: "18px" }}
                pt="0.5rem"
              >
                {Det.age}
              </Text>
              <Text
                fontFamily={"body"}
                fontWeight={"300"}
                noOfLines={[1, 2, 3]}
                fontSize={{ base: "12px", md: "18px", lg: "16px" }}
                pt="1rem"
              >
                Se encuentra en la zona de: {Det.area}
              </Text>
            </Box>
          </Center>

          {/*  Info3  Contacto */}
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
            >
              {/* Fotitos */}
              <Center w="100%">
                <Wrap m="1rem" mt="1rem" pt="1rem">
                  <WrapItem>
                    <Avatar size="lg" name="Segun Adebayo" src={Det.img} />{" "}
                  </WrapItem>
                  <WrapItem>
                    <Avatar size="lg" name="Segun Adebayo" src={Det.img} />{" "}
                  </WrapItem>
                  <WrapItem>
                    <Avatar size="lg" name="Segun Adebayo" src={Det.img} />{" "}
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
        <Box p={4} pt="7rem">
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
    </div>
  );
};

export default Details;
