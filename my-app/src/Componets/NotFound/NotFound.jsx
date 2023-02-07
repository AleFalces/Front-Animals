import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import img5 from "../../assets/imagenes/img5.png";
import { Box, Image, Center, Heading, Button } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box minH="100vh" position="relative" bg="brand.green.200">
      <Navbar />
      <Box>
        <Center>
          <Heading
            fontSize={{ base: "16px", sm: "2em" }}
            py={10}
            fontWeight={"bold"}
            textAlign="center"
            maxW="20em"
            fontFamily={"heading"}
            mt="1%"
            mb="1%"
          >
            Lo sentimos...
            <br /> No pudimos encontrar esa ruta
          </Heading>
        </Center>
        <Center>
          <Image
            src={img5}
            // w={{ base: "80%", sm: "50%", md: "45%" }}
            size={{ base: "sm" }}
            borderRadius="2xl"
            mb="5%"
          />
        </Center>
        <Button
          colorScheme="red"
          mb="5%"
          size="sm"
          onClick={() => navigate("/home")}
        >
          Volver atras
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default NotFound;
