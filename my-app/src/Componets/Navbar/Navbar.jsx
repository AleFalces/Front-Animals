import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="NavBar">
			<NavLink to="/home" className="link">
				Home
			</NavLink>
			<NavLink to="/adoption" className="link">
				Adoptame🐾
			</NavLink>
			<NavLink to="/aboutUs" className="link">
				¿Quienes Somos?
			</NavLink>
			<NavLink to="/donate" className="link">
				Aporta a nuestra causa
			</NavLink>
			<NavLink to="/store" className="link">
				Tienda
			</NavLink>
			<NavLink to="/Login" className="link">
				Login
			</NavLink>
		</div>
	);
};
