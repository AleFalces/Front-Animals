import React from "react";
import {
  Card,
  CardBody,
  Text,
  CardFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function VetCard({ id, name, email, phone, address }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <Card align="center">  
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
            <Button color={"white"} bg="#40c2bb" _hover={{bg: "#ed8936"}} onClick={(e)=> navigate(`/dashboard/updateVet/${id}`)}>Editar</Button>
            <Button onClick={() => navigate(`/veterinary/${id}`)} bg="#feebc8" _hover={{bg: "#e3f6f5", color: "grey"}}> Visitar </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
