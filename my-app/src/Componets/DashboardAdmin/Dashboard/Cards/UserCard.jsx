import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Box,
  Button,
  Center,
  Divider,
  Select,
  // Stack,
  // StackDivider,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setStatusUser } from "../../../../Redux/Actions";
import { useNavigate } from "react-router-dom";

export default function UserCard({ id, name, surname, email, phone, status }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const users = useSelector((state) => state.allUsers);

  function handlerSetStatusUser(id) {
    dispatch(setStatusUser(id));
  }

  return (
    <div>
      <Card>
        <Box maxW="350px">
          {/* <CardHeader>
            <Heading size="md">/Heading>
          </CardHeader> */}
          <CardBody>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Nombre y Apellido:
              </Heading>
              <Text pt="2" fontSize="sm">
                {name} {surname}
              </Text>
            </Box>
            <Divider h="0.2rem" bg="brand.green.100" my="0.5rem" />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Email:
              </Heading>
              <Text pt="2" fontSize="sm">
                {email}
              </Text>
            </Box>
            <Divider h="0.2rem" bg="brand.green.100" my="0.5rem" />
            <Box>
              <Heading size="xs" textTransform="uppercase">
                N° telefono:
              </Heading>
              <Text pt="2" fontSize="sm">
                {phone}
              </Text>
              <Divider h="0.2rem" bg="brand.green.100" my="0.5rem" />
              <Center>
                <Select placeholder="ID" w="50%">
                  <option value="option">{id}</option>
                </Select>
              </Center>
              <Divider h="0.2rem" bg="brand.green.100" my="0.5rem" />
              <Heading size="xs" textTransform="uppercase">
                Estado:
              </Heading>
              <Text
                pt="1rem"
                pb="2rem"
                fontSize="sm"
                textTransform={"uppercase"}
              >
                {status}
              </Text>

              {status === "banned" ? (
                <Box>
                <Button
                  fontFamily={"body"}
                  bg={"orange.300"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={()=>{onOpen();}}
                >
                  Desbloquear
                </Button>
              
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      ¡Desbloquear usuario!
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      ¿Estás seguro/a de querer desbloquear a este usuario?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={(e) => {
                          handlerSetStatusUser(id);
                          onClose();
                        }}
                        ml={3}
                      >
                        Desbloquear
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Box>
              ) : (
                <Box>
                    <Button
                      fontFamily={"body"}
                      bg={"red.600"}
                      color={"white"}
                      _hover={{
                        bg: "orange.400",
                      }}
                      onClick={()=>{onOpen();}}
                    >
                      Bloquear
                    </Button>
                  
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          ¡Bloquear a un usuario!
                        </AlertDialogHeader>
                        <AlertDialogBody>
                          ¿Estás seguro/a de querer bloquear a este usuario? Ya no podrá navegar por la página.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancelar
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              handlerSetStatusUser(id);
                              onClose();
                            }}
                            ml={3}
                          >
                            Bloquear
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
              )}
              {/* 
                // <Button
                //   onClick={() => handlerSetStatusUser(id)}
                //   bg={"red"}
                //   color={"white"}
                //   _hover={{
                //     bg: "red.400",
                //   }}
                // >
                //   Bloquear
                // </Button>

              <Button
                    onClick={() => navigate(`/updateUser/${id}`)}
                    bg={"grey"}
                    color={"white"}
                    _hover={{
                      bg: "red.400",
                    }}
                  >
                    Editar
                  </Button> */}
            </Box>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
