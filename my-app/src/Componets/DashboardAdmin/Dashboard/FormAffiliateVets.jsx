import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postOrUpdateVet, VeterinaryDetails } from "../../../Redux/Actions";
import UploadImage from "./UploadImage";
import { ErrorForm, SuccedForm } from "../../FormPostPet/AlertForm/AlertForm";
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
  useColorModeValue,
  Icon,
  Container,
  // Select,
} from "@chakra-ui/react";

import { MdArrowBackIosNew } from "react-icons/md";

export default function FormAffiliateVets({ value }) {
  // console.log("VALUE", value)

  const dispatch = useDispatch();

  const [isIncomplete, setIsIncomplete] = useState(false);
  const [infoSend, setInfoSend] = useState(false);
  const paramsId = useParams("id");

  const vetDetail = useSelector((state) => state.vetsDetail);
  const vetInfo = vetDetail[0];

  const [image, setImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
    location: [],
  });
  console.log("INPUT", input);

  const errors = {
    name: "",
    description: "",
    image: "",
    phone: "",
    address: "",
    email: "",
    location: [],
  };

  function completeVetData() {
    setInput({
      name: vetInfo?.name || "",
      description: vetInfo?.description || "",
      phone: vetInfo?.phone || "",
      email: vetInfo?.email || "",
      address: vetInfo?.address || "",
      image: vetInfo?.image || "",
      location: vetInfo?.location || [],
    });
  }

  function handlerErrors(e) {
    e.preventDefault();

    const validateName = new RegExp(/^.{3,60}$/);
    const validatePhoneNumber = new RegExp(/^15\d{6,10}$/); //arranque con 15 y contenga entre 6 y 10
    const validateDescription = new RegExp(/^.{10,200}$/);
    const validateAddress = new RegExp(/^.{5,60}$/);
    const validateEmail = new RegExp(/\w+([.-]?\w+)*(\.\w{2,10})+$/);

    if (input.name === "" || !validateName.test(input.name)) {
      errors.name =
        "El nombre de la veterinaria debe tener entre 3 y 60 caracteres";
    }
    if (
      input.description === "" ||
      !validateDescription.test(input.description)
    ) {
      errors.description =
        "La descripcion debe tener entre 10 y 200 caracteres";
    }
    if (input.image === "") {
      errors.image = "Debes cargar una imagen.";
    }
    if (input.phone === "" || !validatePhoneNumber.test(input.phone)) {
      errors.phone =
        "Su telefono debe empezar con 15 y tener entre 6 y 10 digitos";
    }
    if (input.address === "" || !validateAddress.test(input.address)) {
      errors.address =
        "La ubicacion de la veterinaria debe tener entre 5 y 60 caracteres";
    }
    if (input.email === "" || !validateEmail.test(input.email)) {
      errors.email = `El email debe contener un "@" y un "."`;
    }
    if (
      !errors.name &&
      !errors.description &&
      !errors.image &&
      !errors.phone &&
      !errors.address &&
      !errors.email
    ) {
      setIsIncomplete(false);
      setInfoSend(true);
      handlerSubmit(e);
    } else {
      setIsIncomplete(true);
      setInfoSend(false);
      console.log(errors);
      alert(
        `Error: ${
          errors.name !== ""
            ? errors.name
            : errors.description !== ""
            ? errors.description
            : errors.image !== ""
            ? errors.image
            : errors.phone !== ""
            ? errors.phone
            : errors.address !== ""
            ? errors.address
            : errors.email !== ""
            ? errors.email
            : null
        }`
      );
    }
  }

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log("INPUT", input);
  }

  function handlerSubmit(e) {
    e.preventDefault();

    if (value === undefined) {
      let result = input.location.split(", ");
      let finalResult = [Number(result[0]), Number(result[1])];
      setInput({
        ...input,
        location: (input.location = finalResult),
      });
    }
    if (
      input.name &&
      input.description &&
      input.phone &&
      input.address &&
      input.email &&
      input.image &&
      input.location !== ""
    ) {
      if (value === undefined) {
        dispatch(postOrUpdateVet(input, value));
        setIsIncomplete(false);
        setInfoSend(true);
        setInput({
          name: "",
          description: "",
          image: "",
          phone: "",
          address: "",
          email: "",
          location: [],
        });
        document.getElementById("myForm").reset();
      } else {
        dispatch(postOrUpdateVet(input, value, paramsId.id));
        setIsIncomplete(false);
        setInfoSend(true);
      }
    }
  }

  useEffect(() => {
    dispatch(VeterinaryDetails(paramsId.id));
  }, [dispatch]);

  useEffect(() => {
    if (value === "updateVet") {
      completeVetData();
    }
  }, [vetInfo, value]);

  useEffect(() => {
    setInput({
      ...input,
      image: image,
    });
  }, [image]);

  return (
    <div>
      {isIncomplete ? <ErrorForm /> : null}
      {infoSend ? <SuccedForm /> : null}

      <form id="myForm">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"brand.green.100"}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            {value === undefined ? (
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Afiliar una Veterinaria
                </Heading>
              </Stack>
            ) : (
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Editar Info. Veterinaria
                </Heading>
              </Stack>
            )}
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="name" isRequired>
                      <FormLabel>Veterinaria: </FormLabel>
                      <Input
                        placeholder="¿Cómo se llama?"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handlerChange(e)}
                      />
                      {errors.name && <Text>{errors.name}</Text>}
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="description" isRequired>
                      <FormLabel>Descripción: </FormLabel>
                      <Input
                        placeholder="Algún comentario sobre la afiliación..."
                        name="description"
                        value={input.description}
                        type="text"
                        key="description"
                        onChange={(e) => handlerChange(e)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="phone" isRequired>
                  <FormLabel>Teléfono de contacto: </FormLabel>
                  <Input
                    placeholder="Fijo/Celular"
                    value={input.phone}
                    name="phone"
                    key="phone"
                    type="number"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="address" isRequired>
                  <FormLabel>Ubicación: </FormLabel>
                  <Input
                    placeholder="¿Dónde se encuentra la Veterinaria?"
                    value={input.address}
                    name="address"
                    key="address"
                    type="text"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                  {/* <label>Email de contacto: </label> */}
                  <FormLabel>Email de contacto: </FormLabel>

                  <Input
                    value={input.email}
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => handlerChange(e)}
                  />
                </FormControl>
                {value === undefined ? (
                  <FormControl id="location" isRequired>
                    {/* <label>Locacion: </label> */}
                    <FormLabel>Locacion: </FormLabel>

                    <Input
                      type="text"
                      name="location"
                      placeholder="Latitud de tu veterinaria"
                      onChange={(e) => handlerChange(e)}
                    />
                  </FormControl>
                ) : null}

                {value === undefined ? (
                  <FormControl id="image" isRequired>
                    <FormLabel>Subir imagen de la Veterinaria: </FormLabel>

                    <Container>
                      <button>
                        <UploadImage setImage={setImage} />
                      </button>
                    </Container>
                  </FormControl>
                ) : (
                  <FormControl id="image" isRequired>
                    <FormLabel>Cambiar de imagen: </FormLabel>

                    <Container>
                      <button>
                        <UploadImage setImage={setImage} />
                      </button>
                    </Container>
                  </FormControl>
                )}

                {value === undefined ? (
                  <Stack spacing={10} pt={2}>
                    <Button
                      onClick={(e) => [handlerErrors(e), window.scrollTo(0, 0)]}
                      loadingText="Afiliar Veterinaria"
                      fontFamily={"body"}
                      size="lg"
                      bg={"orange.300"}
                      color={"white"}
                      _hover={{
                        bg: "orange.400",
                      }}
                    >
                      Afiliar
                    </Button>
                  </Stack>
                ) : (
                  <Stack spacing={10} pt={2}>
                    <Button
                      onClick={(e) => [handlerErrors(e), window.scrollTo(0, 0)]}
                      loadingText="Editar Veterinaria"
                      fontFamily={"body"}
                      size="lg"
                      bg={"orange.300"}
                      color={"white"}
                      _hover={{
                        bg: "orange.400",
                      }}
                    >
                      Guardar informacion
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Box>

            <Link to={"/dashboard"}>
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
                mr="1rem"
              >
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
