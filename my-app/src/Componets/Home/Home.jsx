import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { num } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";


export const Home = () => {
const dispatch = useDispatch()
const num2 = useSelector(state => state.num)
	return (
		<>
			<Navbar />
			<div>Soy el Home</div>
			<button onClick={()=>dispatch(num())}>Aumentar en 1</button>
			<h2>{num2}</h2>

		</>
	);
};
