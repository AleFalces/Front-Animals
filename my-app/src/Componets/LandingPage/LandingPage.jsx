import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagenes/logo_negro.png";
// import logo2 from "../../assets/imagenes/logo_morado.png";
import "./LandingPage.css";

/* <div className="row justify-content-center">
  <div className="col-12">
    <h2>Welcome</h2>
    <Link to="/home">
      <button className="btn btn-primary">Ingresa</button>
    </Link>
  </div>
  <div className="col-12">
    <Link to="/login">
      <button className="btn btn-primary">
        Ingresa con tu usuario
      </button>
    </Link>
  </div>
</div>
</div> */

const LandingPage = () => {
  return (
    <div className="contenedor">
      <img src={logo} alt="logo" width="500em" className="logo" />
      <div className="container-box">
        <div className="box">
          <img src={logo} alt="logo" width="125em" name="logo" />
          <label htmlFor="logo">
            Donde ayudamos a nuestros amiguitos peludos
          </label>
          <Link to="/home">
            <button className="btn btn-success">Ingresar</button>
          </Link>
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
