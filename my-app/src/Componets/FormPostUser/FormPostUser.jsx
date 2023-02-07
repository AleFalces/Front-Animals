
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { ErrorForm, SuccedForm } from "../FormPostPet/AlertForm/AlertForm";
import { MdArrowBackIosNew } from "react-icons/md";
import logo from '../../assets/imagenes/logo_negro.png'
import {

  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Icon, Image

} from "@chakra-ui/react";


//Regular expressions for mail
let isEmail = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
)


const validateForm = (input) => {
  let inputError = {}

  if (input.name.trim() === "" || !input.name.length) {
    inputError.name = "Debes ingresar tu nombre";
  }
  if (input.surname === "") {
    inputError.surname = `Debes ingresar tu apellido`;
  }
  if (input.email === "" || !input.name.length) {
    inputError.email = "Debes ingresar tu e-mail";
  } else if (
    !isEmail.test(input.email)) {
    inputError.email = "ingresa formato de e-mail válido"
  }
  if (input.username === "") {
    inputError.username = "Debes ingresar un nombre de usuario";
  }
  if (input.phone !== "") {
    if (input.phone.length !== 10) {
      inputError.phone = "Debe ser un numero de 10 digitos";
    }

  }
  return inputError;
}


export default function FormPostUser({ value }) {
	const dispatch = useDispatch();

  useEffect(() => { }, []);

  //Display login feedback
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [infoSend, setInfoSend] = useState(false);


  //Show password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);



  const [inputError, setInputError] = useState({});
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    phone: "",
    role: "user",
  });


  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.trim(),
    });
    console.log("input", input);
    // console.log("error", errors);

    //control errores
    setInputError(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  console.log("INPUT FORM", input);


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.surname &&
      input.email &&
      input.username &&
      input.phone
    ) {
      /* handlerSubmit(e); */
      dispatch(postUser(input));

      setIsIncomplete(false);
      setInfoSend(true);


      //borra todos los inputs pero no sé cómo será con el tema del form con put que trae info a rellenar, creo , asiq queda comentada!
      /*   document.getElementById("myForm").reset(); */

    } else {

      setIsIncomplete(true);
      setInfoSend(false);

    }

  };





  return (
    <div>
      {isIncomplete ? <ErrorForm /> : null}
      {infoSend ? <SuccedForm /> : null}

      <form id="myForm">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg="brand.green.200"
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            {value === undefined ? (
              <Stack align={"center"}>
                <Text fontFamily="heading" fontWeight={'bold'} color='gray.600' fontSize={"5xl"} textAlign={"center"} textShadow={''}>
                  Crea tu cuenta!
                </Text>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Gracias por cuidar a los animales ✌️
                </Text>
                <Box width={20} height={20}>
                  <Image src={logo} ></Image>
                </Box>
              </Stack>
            ) : (
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Actualizá la información de perfil
                </Heading>
              </Stack>
            )}

            <Box
              rounded={"lg"}
              bg={"white"}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="name" isRequired>
                      <FormLabel>Nombre: </FormLabel>
                      <Input
                        type="text"
                        name="name"
                        key="name"
                        focusBorderColor={"brand.green.300"}
                        fontFamily={"body"}
                        // value={input.name} 
                        onChange={(e) => handlerChange(e)}
                      />
                      {inputError.name && (<Text className="text_inputError">{inputError.name}</Text>)}
                    </FormControl>

                  </Box>

                  <Box>
                    <FormControl id="surname" isRequired>
                      <FormLabel>Apellido: </FormLabel>
                      <Input
                        name="surname"
                        type="text"
                        key="surname"
                        focusBorderColor={"brand.green.300"}
                        fontFamily={"body"}
                        onChange={(e) => handlerChange(e)}
                      />
                      {inputError.surname && (<Text className="text_inputError">{inputError.surname}</Text>)}
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl id="username" isRequired>
                  <FormLabel>Apodo: </FormLabel>
                  <Input
                    name="username"
                    value={input.description}
                    key="username"
                    type="text"
                    focusBorderColor={"brand.green.300"}
                    fontFamily={"body"}
                    onChange={(e) => handlerChange(e)}
                  />{inputError.username && (<Text className="text_inputError">{inputError.username}</Text>)}
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email: </FormLabel>
                  <Input
                    name="email"
                    type="text"
                    value={input.email}
                    key="email"
                    placeholder="tumail@mail.com"
                    focusBorderColor={"brand.green.300"}
                    fontFamily={"body"}
                    onChange={(e) => handlerChange(e)}
                  ></Input>
                  {inputError.email && (<Text className="text_inputError">{inputError.email}</Text>)}
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Contraseña: </FormLabel>
                  <InputGroup size="md">
                    <Input
                      placeholder="Ingresar una contraseña"
                      name="password"
                      key="password"
                      focusBorderColor={"brand.green.300"}
                      fontFamily={"body"}
                      type={show ? 'text' : 'password'}
                      onChange={(e) => handlerChange(e)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                    {inputError.password && (<Text>{inputError.password}</Text>)}
                  </InputGroup>
                </FormControl>

                <FormControl id="phone" isRequired>
                  <FormLabel>Cel/Teléfono:</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon bg="gray.50"
                      _dark={{
                        bg: 'gray.800',
                      }}
                      color="gray.500"
                      rounded="md">
                      +54 9
                    </InputLeftAddon>
                    <Input
                      type="number"
                      name="phone"
                      value={input.phone}
                      focusBorderColor={"brand.green.300"}
                      fontFamily={"body"}
                      onChange={(e) => handlerChange(e)}
                    />
                  </InputGroup>
                  {inputError.phone && (<Text className="text_inputError">{inputError.phone}</Text>)}
                </FormControl>
                <Stack spacing={10} pt={2}>
                  {value === undefined ? (
                    <Button
                      onClick={(e) => [handlerSubmit(e), window.scrollTo(0, 0)]}
                      loadingText="Post mascota"
                      fontFamily={"body"}
                      size="lg"
                      bg={"orange.300"}
                      color={"white"}
                      _hover={{
                        bg: "orange.400",

                      }}>
                      Registrarse
                    </Button>
                  ) : (
                    <Button
                      onClick={(e) => [handlerSubmit(e), window.scrollTo(0, 0)]}
                      loadingText="Post mascota"
                      fontFamily={"body"}
                      size="lg"
                      bg={"orange.300"}
                      color={"white"}
                      _hover={{
                        bg: "orange.400",

                      }}>
                      Guardar cambios
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Box>
            <Link to={"/"}>
              <Icon
                as={MdArrowBackIosNew}
                color="orange.400"
                boxSize={5}
                _hover={{
                  color: "grey",
                  boxSize: "7",
                }}
              />
              <Icon
                as={MdArrowBackIosNew}
                color="orange.400"
                boxSize={5}
                _hover={{
                  color: "grey",
                  boxSize: "7",
                }}
              />
              <Button
                fontFamily={"body"}
                bg="base.green.100"
                color={"grey"}
                _hover={{
                  color: "orange.400",
                }}
                p="0"
                mr="1rem">
                {" "}
                Atrás
              </Button>
            </Link>
          </Stack>
        </Flex>
      </form>
    </div>
  );
}

