import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import VetCard from "../VetsCards/VetsCards";
import { getAllVeterinaries } from "../../Redux/Actions/index";
import MapView from "../Map/MapView";
import { Box, Text, SimpleGrid, Center, chakra, Image } from "@chakra-ui/react";
import logo from "../../assets/imagenes/logo_amarillo.png";

const Veterinaries = () => {
  const veterinaries = useSelector((state) => state.allVets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVeterinaries());
  }, [dispatch]);

  return (
    <Box bg="brand.green.200">
      <Navbar />
      <Box>
        <Box>
          <Center>
            <chakra.h4
              fontSize={"4xl"}
              py={10}
              fontWeight={"bold"}
              color={"brand.orange"}
              textAlign="center"
              maxW="20em"
              fontFamily={"heading"}
              mt="1%"
              mb="1%"
              // py={10}
            >
              Bienvenidos a nuestra seccion de veterinarias en línea.
            </chakra.h4>
          </Center>
          <Center>
            <Text
              color="gray.500"
              fontSize="2xl"
              marginBottom="10"
              maxW="40em"
              fontFamily="body"
            >
              Aquí encontrarás una amplia selección de clinicas altamente
              capacitadas y dedicadas a brindar el mejor cuidado para tu
              mascota.
              <br />
              ¡Navega y encuentra la clínica perfecta para tus necesidades de
              atención animal!
            </Text>
          </Center>
        </Box>

        {!veterinaries?.length ? (
          <Box margin="5em" padding="5em">
            <Text fontFamily="heading" fontSize={"3xl"}>
              Lo sentimos. No hay veterinarias disponibles
            </Text>
            <Center>
              <Image
                src={logo}
                alt="404"
                borderRadius="2xl"
                h={"15em"}
                maxW="75%"
              />
            </Center>
          </Box>
        ) : (
          <Box>
            <Center>
              <SimpleGrid
                columns={[1, 2, 3]}
                spacing={10}
                alignItems={"center"}
              >
                {veterinaries.map((ele, ind) => (
                  <VetCard data={ele} key={ind} />
                ))}
              </SimpleGrid>
            </Center>
          </Box>
        )}
        <chakra.h4
          fontSize={"4xl"}
          py={3}
          fontWeight={"bold"}
          color={"brand.orange"}
          textAlign="center"
          marginTop="14"
          fontFamily="heading"
        >
          Mapa Buddy
        </chakra.h4>
        <Center>
          <Text
            marginTop="5"
            fontSize={"2xl"}
            py={3}
            color="gray.500"
            maxW="50em"
            fontFamily="body"
          >
            Aquí encontrarás la ubicación precisa de una selección cuidadosa de
            clínicas médicas que ofrecen servicios de alta calidad.
            <br /> Use esta herramienta para encontrar la clínica más cercana y
            conveniente para sus necesidades médicas. ¡Comience a explorar
            ahora!
          </Text>
        </Center>
        <Box>
          <Center>
            <MapView veterinaries={veterinaries} />
          </Center>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Veterinaries;
