import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBarAdoption from "./FilterBarAdoption";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getAdoptionPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./FilterBar.css";

import Pagination from "../Pagination/Pagination";

const Adoption = () => {
	const pets = useSelector((state) => state.pets);
	const actualPage = useSelector((state) => state.actualPage);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAdoptionPets());
	}, [dispatch]);

	const [PetPerPage] = useState(9);

	const lastIndex = actualPage * PetPerPage;
	const firstIndex = lastIndex - PetPerPage;
	const currentPetPerPage = pets.slice(firstIndex, lastIndex);

	return (
		<>
			<Navbar />
			<br />
			<div class="example">
				<FilterBarAdoption />
			</div>

			<div className="Pagination">
				<Pagination pets={pets} PetPerPage={PetPerPage} />
			</div>

			<div className="cardsContainer">
				{!pets?.length ? (
					<p>No hay mascotas</p>
				) : (
					currentPetPerPage?.map((el) => (
						<Link to={`/pets/${el.id}`} key={el.id}>
							<div className="cardsContainerPadding">
								<Card data={el} />
							</div>
						</Link>
					))
				)}
				<Footer />
			</div>
			
			
		</>
	);
};

export default Adoption;
