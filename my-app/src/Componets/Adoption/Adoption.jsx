import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

import { getAllPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "./Cards.css";

const Adoption = () => {
	const allPets = useSelector((state) => state.allPets);
	

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPets());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div className="cardsContainer">
				{!allPets?.length ? (
					<p>No hay mascotas</p>
				) : (
					allPets?.map((el) => (
						<Link to={`/pet/${el.id}`} key={el.id}>
							<div className="cardsContainerPadding">
								<Card data={el} />
							</div>
						</Link> 
					))
				)}
			</div>
			<Footer />
		</>
	);
};

export default Adoption;
