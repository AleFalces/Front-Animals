import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/imagenes/logo_negro.png";
import notfound from "../../assets/imagenes/notfound.png";
import { Box, Heading, Spinner, Center, Image, Text } from "@chakra-ui/react";
import axios from "axios";

export default function CreateUserAuth0() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const navegate = useNavigate();

  const [logUser, setlogUser] = useState([]);

  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    phone: "123456789",
    password: "123456789",
    role: "user",
  });

  const CheckUser = async () => {
    try {
      let login = await axios.post("http://localhost:3001/loginAuth0", user);
      let response = login.data;
      let guardado = localStorage.setItem(
        "loggedUser",
        JSON.stringify(response)
      );
      setlogUser(guardado);
      navegate("/home");
    } catch (error) {
      return handlerSubmit();
    }
  };

  const handlerSubmit = () => {
    dispatch(postUser(input));
    localStorage.setItem("loggedUser", JSON.stringify(input));
  };

  if (user && !input?.email) {
    setInput({
      ...input,
      name: user?.given_name,
      surname: user?.family_name,
      email: user?.email,
      username: user?.nickname,
      phone: "123456789",
      password: "123456789",
      role: "user",
      status: "active",
    });
  }
  if ((user && logUser.length <= 0) || user || logUser.length <= 0) {
    CheckUser();
  }
  console.log(user, input);
  return (
    <Box>
      {!user ? (
        <Box
          minH="100vh"
          position="relative"
          bg="brand.green.100"
          //   display="flex"
          //   flexDirection="row"
          //   justifyContent="center"
          //   alignItems="center"
        >
          <Center>
            <Image
              src={logo}
              alt="banned"
              w={[
                "75%", // base
                "50%", // 480px upwards
                "25%", // 768px upwards
                "30%",
              ]}
            />
          </Center>
          <Heading fontWeight="bold" fontSize="24" mt="1em">
            Bienvenido de vuelta! <br />
            Estamos comprobando tus datos
          </Heading>
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              mt="3em"
            />
          </Center>
        </Box>
      ) : (
        <Box
          minH="100vh"
          position="relative"
          bg="brand.green.100"
          //   display="flex"
          //   justifyContent="center"
          //   alignItems="center"
        >
          <Center>
            <Image
              src={notfound}
              alt="error"
              w={[
                "75%", // base
                "50%", // 480px upwards
                "25%", // 768px upwards
                "20%",
              ]}
              mt="3em"
              padding="1em"
            />
          </Center>
          <Center>
            <Heading
              fontWeight="bold"
              fontSize="36px"
              maxW="15em"
              minW="10em"
              mt="1em"
              mb="4em"
            >
              Oops... No pudimos recopilar sus datos, por favor intente
              <Text
                m="1em"
                paddingStart="10px"
                color="orange"
                textTransform="uppercase"
                maxW="12em"
                minW="10em"
              >
                <Link to="/"> Ingresar de nuevo</Link>
              </Text>
            </Heading>
          </Center>
        </Box>
      )}
    </Box>
  );
}
