import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  Center, Divider, Select
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusUser } from "../../../../Redux/Actions";
import { useNavigate } from "react-router-dom";


export default function UserCard({ id, name, surname, email, phone, status }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.allUsers);

  function handlerSetStatusUser(id) {
    dispatch(setStatusUser(id));
  }

  useEffect(() => {}, [users]);

  return (
    <div>
      <Card >
        <Box maxW='350px'>
          <CardHeader>
            <Heading size="md">Info de usuario</Heading>
          </CardHeader>

          <CardBody>
         
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Nombre y Apellido:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {name} {surname}
                </Text>
              </Box>
              <Divider h='0.2rem' bg='brand.green.100'my='0.5rem' />
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {email}
                </Text>
              </Box>
              <Divider h='0.2rem' bg='brand.green.100'my='0.5rem' />
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  N° telefono:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {phone}
                </Text>
                <Divider h='0.2rem' bg='brand.green.100'my='0.5rem' />
                <Center>
                <Select placeholder='ID' w='50%'>
                    <option value= 'option'>{id}</option>
                  </Select>
                  </Center>
                <Divider h='0.2rem' bg='brand.green.100'my='0.5rem' />
                <Heading size="xs" textTransform="uppercase">
                  Estado:
                </Heading>
                <Text pt="1rem" pb="2rem" fontSize="sm" textTransform={'uppercase'} >
                  {status}
                </Text>

                {status === "banned" ? (
                  <Button
                    onClick={() => {
                      handlerSetStatusUser(id);
                    }}
                    bg={"green"}
                    color={"white"}
                    _hover={{
                      bg: "green.400",
                    }}
                  >
                    Activar
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlerSetStatusUser(id)}
                    bg={"red"}
                    color={"white"}
                    _hover={{
                      bg: "red.400",
                    }}
                  >
                    Bloquear
                  </Button>
                )}
                <Button
                    onClick={() => navigate(`/updateUser/${id}`)}
                    bg={"grey"}
                    color={"white"}
                    _hover={{
                      bg: "red.400",
                    }}
                  >
                    Editar
                  </Button>
              </Box>
            
          </CardBody>
        </Box>
      </Card>
      
    </div>
  );
}
