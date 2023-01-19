import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";


export const Home = () => {
const dispatch = useDispatch()
	return (
		<>
			<Navbar />
			<div>Soy el Home</div>
		</>
	);
};
