import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_blanco.png";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark altura">
        <div className="container-fluid">
              <NavLink to="/home" className="navbar-brand">
                <img src={logo} alt="logo" width="100" />
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
          <ul className="navbar-nav me-auto">
			<li className="navbar nav-item">
            <NavLink to="/adoption" className="nav-link active text-light">
              Adoptame🐾
            </NavLink>
			</li>
            <li className="navbar nav-item">
              <NavLink to="/aboutUs" className="nav-link text-light">
                ¿Quienes Somos?
              </NavLink>
            </li> 
			<li className="navbar nav-item">
            <NavLink to="/donate" className="nav-link text-light">
              Aporta a nuestra causa
            </NavLink>
			</li>
            <li className="navbar nav-item">
              <NavLink to="/store" className="nav-link text-light">
                Tienda
              </NavLink>
            </li>
            <li className="navbar nav-item">
				{/* Renegando con el login para que aparezca mas a la derecha */}
            <NavLink to="/login" className="nav-link text-light">
              Ingresa
            </NavLink>
			</li>
          </ul>
		  </div>
        </div>
      </nav>
    </div>
  );
};
