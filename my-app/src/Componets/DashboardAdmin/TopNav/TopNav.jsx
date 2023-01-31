import React from "react";
import styles from "./TopNav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <h5 className={styles.brand}>Panel Admin</h5>
      <Link to="/home">
        <button>Home</button>
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
        <Link to={"/dashboard/createProduct"}>
          <button>Publicar producto </button>
        </Link>
      </Button>
      <SearchBar />
    </nav>
  );
};

export default TopNav;
