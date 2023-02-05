import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import VetCard from "../VetsCards/VetsCards";
import { getAllVeterinaries } from "../../Redux/Actions/index";
import MapView from "../Map/MapView";
import {
  Box,
  Text,
  SimpleGrid,
  Center,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";

const Veterinaries = () => {
  const veterinaries = useSelector((state) => state.allVets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVeterinaries());
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      {/* <Container maxW="2x1" centerContent> */}
      <Box>
        <Box>
          <chakra.h4
            fontSize={"2xl"}
            py={3}
            fontWeight={"bold"}
            color={"brand.orange"}
            textAlign="center"
          >
            Bienvenidos a nuestra seccion de veterinarias en línea.
          </chakra.h4>
          <Text color="gray.500" fontSize="2xl" marginBottom="10">
            Aquí encontrarás una amplia selección de clinicas altamente
            capacitadas y dedicadas a brindar el mejor cuidado para tu mascota.
            <br />
            ¡Navega y encuentra la clínica perfecta para tus necesidades de
            atención animal!
          </Text>
        </Box>
        <Box>
          <Center>
            <SimpleGrid
              columns={[1, 2, 3]}
              spacing={10}
              alignItems={"center"}
              // justifyContent="center"
            >
              {!veterinaries?.length ? (
                <p>No hay veterinarias disponibles</p>
              ) : (
                veterinaries?.map((el, ind) => <VetCard data={el} key={ind} />)
              )}
            </SimpleGrid>
          </Center>
        </Box>
        <Text marginTop="14" fontSize={"2xl"} py={3} color="gray.500">
          Aquí encontrarás la ubicación precisa de una selección cuidadosa de
          clínicas médicas que ofrecen servicios de alta calidad.
          <br /> Use esta herramienta para encontrar la clínica más cercana y
          conveniente para sus necesidades médicas. ¡Comience a explorar ahora!
        </Text>
        <Box>
          <Center>
            <MapView veterinaries={veterinaries} />
          </Center>
        </Box>
      </Box>
      {/* </Container> */}
      <Footer />
    </Box>
  );
};

export default Veterinaries;
