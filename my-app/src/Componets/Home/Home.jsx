import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import './Home.css'


export const Home = () => {
const dispatch = useDispatch()
	return (
		<>
			<Navbar />
			<div className="home">Soy el Home

			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		</>
	);
};
