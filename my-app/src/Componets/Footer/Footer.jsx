import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagenes/logo_blanco.png";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row">
            <Link to="/home">
              <img src={logo} alt="logo" width="105em" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
