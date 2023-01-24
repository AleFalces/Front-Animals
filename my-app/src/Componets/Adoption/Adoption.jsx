import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBar from "../FilterBar/FilterBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

import { getAllPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./FilterBar.css"

const Adoption = () => {
	const allPets = useSelector((state) => state.allPets);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPets());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div class="example"><FilterBar/></div>

			<div className="cardsContainer">
				{!allPets?.length ? (
					<p>No hay mascotas</p>
				) : (
					allPets?.map((el) => (
						<Link to={`/pets/${el.id}`} key={el.id}>
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
