import React from "react";
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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setStatusUser } from "../../../../Redux/Actions";

export default function UserCard({ id, name, surname, email, phone, role }) {
  const dispatch = useDispatch();

  function handlerSetActiveUser() {
    // dispatch(setStatusUser(id)) averiguar como despachar la data
  }

  function handlerSetInactiveUser() {
    dispatch(setStatusUser(id)); //averiguar como despachar la data
  }

  return (
    <div>
      <Card w="400px">
        <Box>
          <CardHeader>
            <Heading size="md">Info de usuario</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Nombre y Apellido:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {name} {surname}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {email}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  N° telefono:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {phone}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  Role:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {role}
                </Text>
                <Heading size="xs" textTransform="uppercase">
                  ID:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {id}
                </Text>
                
                <Button
                bg={"green"}
                color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >Activo</Button>
                <Button
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    bg: "red.400",
                  }}
                >
                  Inactivo
                </Button>
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
