import React from "react";
import { Card, CardBody, Text, CardHeader, Heading, Stack, StackDivider, Box } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { getAllUsers } from "../../../../Redux/Actions";


export default function UserCard ({id, name, surname, email, phone, role }) {
    // const dispatch = useDispatch()

  return (
    <div>
      <Card>
  <CardHeader>
    <Heading size='md'>Info de usuario</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Nombre y Apellido:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {name} {surname}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Email:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {email}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          N° telefono:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {phone}
        </Text>
        <Heading size='xs' textTransform='uppercase'>
          Role:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {role}
        </Text>
        <Heading size='xs' textTransform='uppercase'>
          ID:
        </Heading>
        <Text pt='2' fontSize='sm'>
          {id}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
  );
};