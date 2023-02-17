import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import mercadoPago from "../../assets/imagenes/mercadoPago.png";

// import NotFound from "../NotFound/NotFound";

import {
  Box,
  Button,
  Text,
  chakra,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";

import axios from "axios";
import { HOST } from "../../utils";
const Donate = () => {
  const url = `${HOST}`;


  const payMp = async (e) => {
    const value = e.target.value;
    const unit_price = parseInt(value);
    const donation ={
      unit_price: unit_price,
      title: "Gracias por su colaboración"
   }
    axios
      .post(`${url}/donation`, {
        donation,
      })
      .then((response) => {
        window.open(response.data, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const subscription = async () => {
    // const user = JSON.parse(window.localStorage.getItem("loggedUser"));
    // const email = user.map((e) => e.email);
    axios
      .post(`${url}/donation/subscription`, {
        email: "test_user_1305654611@testuser.com",
      })
      .then((response) => {
        console.log("LINK" + response.data);
        window.open(response.data, "_blank");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Box minHeight={"100vh"} bg="brand.backgorund" paddingBottom={"3rem"}>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
            color={"brand.darkBlue"}
            fontFamily={"heading"}
          >
            Ayudanos con tu donación y forma parte!
          </chakra.h1>
          <Box
            h={"80"}
            backgroundImage={
              "url(https://www.comunidad.madrid/sites/default/files/styles/image_style_16_9/public/img/dog-1861839_1920_1.jpg?itok=QNNPiHxj)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            borderRadius={20}
            boxShadow="2xl"
            // _hover={}
          />
          <Text
            color={"gray.500"}
            fontFamily={"body"}
            py={10}
            pb={10}
            alignItems={"center"}
          >
            Tu aporte nos permite continuar llevando a cabo actividades
            sanitarias, educativas y de asistencialismo. Los aportes económicos
            son importantes para pagar tratamientos, estudios médicos y
            honorarios veterinarios, comprar insumos y alimento, financiar
            campañas de castración en zonas carenciadas, imprimir material de
            difusión entre otros.
          </Text>
          <Center>
            {" "}
            <Image src={mercadoPago}></Image>
          </Center>

          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
            color={"brand.darkBlue"}
            fontFamily={"heading"}
          >
            Aporte unico
          </chakra.h1>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <Button
              bg={"brand.orange"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "brand.darkBlue" }}
              fontFamily={"body"}
              onClick={(e) => payMp(e)}
              value="500"
            >
              $500
            </Button>
            <Button
              bg={"brand.orange"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "brand.darkBlue" }}
              fontFamily={"body"}
              onClick={(e) => payMp(e)}
              value="1000"
            >
              $1000
            </Button>
            <Button
              bg={"brand.orange"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "brand.darkBlue" }}
              fontFamily={"body"}
              onClick={(e) => payMp(e)}
              value="2000"
            >
              $2000
            </Button>
          </SimpleGrid>
          <Box py={20}>
            <Button
              bg={"brand.darkBlue"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "brand.orange" }}
              fontFamily={"body"}
              onClick={() => subscription()}
              size={"lg"}
            >
              Suscribite para ayudarnos mensualmente
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Donate;
