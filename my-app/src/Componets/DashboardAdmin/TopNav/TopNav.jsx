import React from "react";
import styles from "./TopNav.module.css";
import SearchBar from "../SearchBar/SearchBar";

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <h5 className={styles.brand}>ONG Mascotas</h5>
      <SearchBar/>
         
    </nav>
  );
};

export default TopNav;
