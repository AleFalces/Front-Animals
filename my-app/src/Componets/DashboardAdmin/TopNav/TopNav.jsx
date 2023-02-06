import React from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";
import { Button, Box, Icon } from "@chakra-ui/react";
import { MdArrowBackIosNew } from 'react-icons/md';



const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <h5 className={styles.brand}>Administrar sitio Web</h5>

      <Link to={"/home"}>
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
          mr="1rem">
          {" "}
          Atrás
        </Button>
      </Link>




<<<<<<< Updated upstream
=======
    <nav /* className={styles.topNav} */>
      <SimpleGrid columns={[2,2, 4]} pt='2rem' bg={"brand.green.100"} pb={'1rem'}>
        <Box>
          <h5 className={styles.brand}>Administrar sitio Web</h5>
        </Box>
>>>>>>> Stashed changes









      <Button
        loadingText="Publicar el producto"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        <Box>
          <Link to={"/dashboard/createProduct"}>
            <button>Publicar producto </button>
          </Link>
        </Box>
      </Button>
      <Button
        loadingText="Afiliar Veterinaria"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        <Box>
          <Link to={"/dashboard/createVet"}>
            <button>Afiliar Veterinaria </button>
          </Link>
        </Box>
      </Button>
    </nav>
  );
};

export default TopNav;
