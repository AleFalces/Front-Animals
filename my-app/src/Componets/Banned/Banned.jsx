import React from "react";
import img5 from "../../assets/imagenes/logo_negro.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Image, Heading, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Banned = ({ handleSetUserFlag }) => {
  const navigate = useNavigate()
  const { logout } = useAuth0();
  const cerrarSesion = () => {
    localStorage.removeItem("loggedUser");
    // logout({ returnTo: "/" });
    handleSetUserFlag()
    navigate("/")
  };

  return (
    <Box bg="brand.green.200" minH="100vh" position="relative">
      <Box>
        <Center>
          <Heading maxW="55%" fontFamily="heading" mt="2em" mb="1em">
            Su cuenta se encuentra Bloqueada
          </Heading>
        </Center>
        <Center>
          <Image
            src={img5}
            alt="banned"
            w={[
              "85%", // base
              "50%", // 480px upwards
              "25%", // 768px upwards
              "15%",
            ]}
          />
        </Center>
        <Center>
          <Text
            mb="3em"
            mt="1em"
            fontSize="2xl"
            minW="13em"
            fontFamily="heading"
            fontWeight="bold"
          >
            El equipo decidió bloquearte, si crees que has sido bloqueado erroneamente, por favor contactate con nosotros informandonos sobre tu caso.
          </Text>
        </Center>
        <Button
          colorScheme="red"
          color="black"
          mb="2em"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </Button>
      </Box>
    </Box>
  );
};

export default Banned;
