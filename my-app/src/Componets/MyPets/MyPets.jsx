import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card"
// import Pagination from "../Pagination/Pagination";
import { SimpleGrid, Heading, Container, Text, Center, Box } from "@chakra-ui/react";
import { getUserId } from "../../Redux/Actions"; //dispatch getUserId(aca le paso el id (del localStorage)y me trae toda la info del user, y a esa info la guardo en una variable/ Dsp uso esa variable para sacar los pets de ahi y recorrerlos

export const MyPets = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({});
  const userRedux = useSelector((state) => state.user); //userInfo[0].pet.map()
  const userPets = userRedux[0]?.pet;
  const loggedUser = localStorage.getItem("loggedUser");


  useEffect(() => {
    if (loggedUser) {
      var [logged] = JSON.parse(loggedUser);
      setUsuario(logged);
    }
  }, [loggedUser, userPets]);
  useEffect(() => {
    dispatch(getUserId(JSON.parse(loggedUser)[0].id)); //del localStorage me traigo la info del usuario, desde su posicion 0 de array, por eso le pregunto si tiene algo con el "?", si tiene algo dentro que me traiga su id

  }, [])

  console.log("userPets", userPets);

  return (
    <>
      <NavBar />

      <Box bg={'brand.green.200'} mb='3rem'>
        <Heading as="h1" fontSize="3rem" pt="3rem" color="gray.600">
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
          >Aquí están todas tus publicaciones, podrás editar su información, tanto como  para borrarlas
          </Text>
        </Container>
      </Box>
      <Center>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing='40px' mb='6rem' >
          {
            userPets ? userPets.map((pet) => (
              <div className="divContainer">
                <Card data={pet} value={"update"} />
              </div>
            )) : null
          }
        </SimpleGrid>
      </Center>
      <Footer />

    </>

  );
};









{/* <div className="Pagination">
  <Pagination pets={userPets} PetPerPage={PetPerPage} />
</div>
<SimpleGrid columns={[1, 2, 3]} spacing="40px">
  {!pets?.length ? (
    <p>No hay mascotas</p>
  ) : (
    currentPetPerPage?.map((el) => (
      <Link to={`/pets/${el.id}`} key={el.id}>
        <Card data={el} />
      </Link>
    ))
  )}
</SimpleGrid> */}