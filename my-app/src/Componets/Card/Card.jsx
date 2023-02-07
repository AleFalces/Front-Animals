import React from "react";
import { useDispatch } from "react-redux";
import "../Adoption/Cards.css";
import {
  Heading,
  Image,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import "../Adoption/Cards.css";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deletePet } from "../../Redux/Actions";

const Card = ({ data: { id, size, img, sex, species, age, area }, value }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  function handlerNavigateUpdate(e) {
    e.preventDefault();
    navigate(`/updatePet/${id}`);
  }
  function handlerDeletePet(e, id) {
    // FUNCION DELETE PONER EN EL BOTON X
    e.preventDefault();
    console.log("HANDLER DELETE PET!!!!!!!!!!!!!!!!!");
    dispatch(deletePet(id));
  }
  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          h={"450px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          {/* ↓↓↓↓↓↓   BUTTON DELETE PET FALTARIA UBICARLO MEJOR  ↓↓↓↓↓↓ */}
          {value === "update" ? (
            <Box paddingRight={3} p={2}>
              <Button
                fontFamily={"body"}
                size="sm"
                w="10%"
                bg={"orange.300"}
                color={"white"}
                _hover={{
                  bg: "orange.400",
                }}
                onClick={onOpen}
                className="buttonDeletePet"
              >
                X
              </Button>
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Borrar Mascota
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      ¿Estás seguro/a de querer borrar tu mascota? No podras
                      volver atras una vez hecho.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={(e) => {
                          handlerDeletePet(e, id);
                          onClose();
                        }}
                        ml={3}
                      >
                        {" "}
                        {/* onClick={onClose}*/}
                        Borrar
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Box>
          ) : null}
          {/* ↑↑↑↑↑↑↑↑   BUTTON DELETE PET FALTARIA UBICARLO MEJOR  ↑↑↑↑↑↑↑↑ */}

          <Center>
            <Image
              size={"lg"}
              src={img}
              borderRadius="7px"
              h={"150px"}
              alt={species}
              mb={4}
              pos={"relative"}
            />
          </Center>
          <Heading
            fontSize={"2xl"}
            fontFamily={"heading"}
            textTransform="uppercase"
          >
            {species}
          </Heading>
          <Text
            fontWeight={500}
            color={"gray.500"}
            mb={1}
            fontFamily={"body"}
            textTransform="uppercase"
          >
            {size}
            <Box pt="0px">
              {" "}
              {sex === "macho" ? (
                <Icon as={IoMdMale}></Icon>
              ) : (
                <Icon as={IoMdFemale}></Icon>
              )}
            </Box>
          </Text>

          {value !== "update" ? (
            <Text
              fontWeight={"bold"}
              textAlign={"center"}
              color={"gray.500"}
              fontFamily={"heading"}
              px={3}
            >
              Tag{" "}
              <Link href={"#"} color={"blue.400"}>
                #adoptaun{species}
              </Link>{" "}
              en tus post!
            </Text>
          ) : null}

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue("gray.50", "gray.800")}  /* Me rompe el renderizado condicional si dejo la funcion */
              bg={"gray.100"}
              fontWeight={"400"}
            >
              {area}
            </Badge>
          </Stack>

          {/*       ↓↓↓↓↓↓↓↓   BOTON EDITAR   ↓↓↓↓↓↓↓↓       */}
          {value === "update" ? (
            <button
              className="modifyButton"
              onClick={(e) => handlerNavigateUpdate(e)}
            >
              Editar
            </button>
          ) : null}
          <Stack mt={4} direction={"column"} spacing={4}>
            <Center></Center>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
};

export default Card;
