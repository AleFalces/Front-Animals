import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imagenes/logo_negro.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      {/*        ↓↓↓↓ saqué la clase bg-dark del nav de abajo ↓↓↓↓        */}
      <nav className="navbar navbar-expand-md navbar-dark navHeight">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand">
            <img src={logo} alt="logo" width="105em" />
          </NavLink>
          {/* Boton menu dropdown*/}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            {/* si la pantalla es mas chica, automaticamente aparece el menu dropdown con todos las secciones */}
          </button>

          <div className="collapse navbar-collapse" id="menu">
            {/* clases que estaban en el ul de abajo: navbar-nav  me-auto */}
            <ul className="ul">
              <li className="navbar nav-item">
                {/* clases que estaban en los NavLinks de abajo: text-light active */}
                <NavLink to="/adoption" className="nav-link">
                  Adoptame🐾
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/aboutUs" className="nav-link">
                  ¿Quienes Somos?
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/donate" className="nav-link">
                  Aporta a nuestra causa
                </NavLink>
              </li>
              <li className="navbar nav-item">
                <NavLink to="/store" className="nav-link">
                  Tienda
                </NavLink>
              </li>
              <li className="navbar nav-item">
                {/* Renegando con el login para que aparezca mas a la derecha */}
                <NavLink to="/login" className="nav-link">
                  Ingresar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
