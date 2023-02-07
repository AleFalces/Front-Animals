import React from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  CardHeader,
  CardFooter,
  Button,
  Link,
  Divider
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function VetCard({ id, name, email, phone, address }) {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Veterinaria</Heading>
        </CardHeader>  
        <CardBody>
          <Text>Nombre: {name}</Text>
        </CardBody>
        <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
        <CardBody>
          <Text>Email: {email}</Text>
        </CardBody>
        <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
        <CardBody>
          <Text>Teléfono: {phone}</Text>
        </CardBody>
        <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
        <CardBody>
          <Text>Ubicación: {address}</Text>
        </CardBody>
        <CardFooter>
          <Link href={`http://localhost:3000/veterinary/${id}`}>
            <Button colorScheme="yellow"> Visitar </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
