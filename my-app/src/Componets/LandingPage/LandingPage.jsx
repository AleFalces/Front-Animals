import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagenes/logo_negro.png";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./LandingPage.css";

const LandingPage = () => {
  // const { isAuthenticated, user } = useAuth0();
  // const navigate = useNavigate();

  return (
    <div className="contenedor">
      <img src={logo} alt="logo" width="500em" className="logo" />
      <div className="container-box">
        <div className="box">
          <img src={logo} alt="logo" width="125em" name="logo" />
          <label className="logo">
            Donde ayudamos a nuestros amiguitos peludos
          </label>
          <Login name="Login" />
          <Link to="/home">
            <button className="btn btn-warning">
              Ingresar sin registrarse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
