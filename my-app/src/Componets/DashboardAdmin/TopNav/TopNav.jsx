import React from "react";
import styles from "./TopNav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <h5 className={styles.brand}>Administrar sitio Web</h5>
      <Link to="/home">
        <button>Ir atrás</button>
      </Link>
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
      <SearchBar />
    </nav>
  );
};

export default TopNav;
