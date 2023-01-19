import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Slider from '../Slider/Slider'
import './Home.css'


export const Home = () => {
const dispatch = useDispatch()
	return (
		<>
			<Navbar />
			<div className="home">
				<span>Hola soy el se;or home</span>
                <Slider/>
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		</>
	);
};
