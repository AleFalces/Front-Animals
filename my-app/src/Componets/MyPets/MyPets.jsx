import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card"
import { SimpleGrid, Heading, Container, Text, Center, Box } from "@chakra-ui/react";
import { getUserId } from "../../Redux/Actions"; //dispatch getUserId(aca le paso el id (del localStorage)y me trae toda la info del user, y a esa info la guardo en una variable/ Dsp uso esa variable para sacar los pets de ahi y recorrerlos
import s from "./MyPets.module.css"

export const MyPets = ({ handleSetUserFlag }) => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({});
  const userRedux = useSelector((state) => state.user); 
  const userPets = userRedux[0]?.pet;
  const loggedUser = localStorage.getItem("loggedUser");


  useEffect(() => {
    if (loggedUser) {
      var [logged] = JSON.parse(loggedUser);
      setUsuario(logged);
    }
  }, [loggedUser, userPets]);
  useEffect(() => {
    dispatch(getUserId(JSON.parse(loggedUser)[0].id));
  }, [])


  return (
    <>
      <NavBar handleSetUserFlag={handleSetUserFlag}/>

      <Box bg={'brand.green.200'} mb='3rem'>
        <Heading as="h1" fontSize="2.5rem" pt="3rem" color="gray.800">
          {" "}
          Mis mascotas
        </Heading>
        {/* DETAIL */}
        <Container>
          <Text
            fontFamily={"body"}
            fontWeight={"300"}
            /* noOfLines={[4, 4, 3]} */
            px="1rem"
            pt={["0.5rem", "0.5rem", "1rem"]}
            pb="2rem"
            my="0rem"
            fontSize={{ base: "20px", md: "20px", lg: "22px" }}
            color="gray.500"
            >
              Aquí están todas tus publicaciones, podrás editar su información, tanto como  para borrarlas
          </Text>
        </Container>
      </Box>
      <Center >

        <div className={s.divContainer}>
          {
            userPets && userPets[0]
            ? userPets.map((pet) => (
                <Card data={pet} value={"update"} />
                )) 
            : <Box display="flex"justifyContent={"center"}width={"100%"}
              >
                <Text fontSize="2rem"marginBottom={"2rem"}>
                 No tienes mascotas publicadas
                </Text>
              </Box>
          }
        </div> 

      </Center>
      <Footer />
    </>

);
};