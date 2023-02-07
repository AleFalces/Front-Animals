import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card"
// import Pagination from "../Pagination/Pagination";
import { SimpleGrid, Heading, Container, Text } from "@chakra-ui/react";
import { getUserId } from "../../Redux/Actions"; //dispatch getUserId(aca le paso el id (del localStorage)y me trae toda la info del user, y a esa info la guardo en una variable/ Dsp uso esa variable para sacar los pets de ahi y recorrerlos

export const MyPets = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState([]);
  const userInfo = useSelector((state) => state.user); //userInfo[0].pet.map()
  const userPets = userInfo[0]?.pet;

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      var logged = JSON.parse(loggedUser);
      setUsuario(logged);
    }
  }, []);

  useEffect(() => {
    dispatch(getUserId(usuario[0]?.id)); //del localStorage me traigo la info del usuario, desde su posicion 0 de array, por eso le pregunto si tiene algo con el "?", si tiene algo dentro que me traiga su id
  }, [dispatch, usuario]);

  console.log("userPets", userPets);

  return (
    <>
      <NavBar />
      <br />

      <Heading as="h4" size="lg" pt="2rem" color="gray.600">
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
          py={["2rem", "1rem", "2rem"]}
          my="0rem"
          fontSize={{ base: "14px", md: "18px", lg: "20px" }}
          color="gray.500"
        >Aquí están todas tus publicaciones, podrás editar su información, tanto como borrarlas
        </Text>
      </Container>


      <SimpleGrid columns={[1, 2, 3]} spacing='40px' >
        {
          userPets ? userPets.map((pet) => (
            <div className="divContainer">
              <Card data={pet} value={"update"} />
            </div>
          )) : null
        }
      </SimpleGrid>
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