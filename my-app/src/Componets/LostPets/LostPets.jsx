import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBarLost from "./FilterBarLost";
import FilterBar from "../Adoption/FilterBarAdoption";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getLostPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "../Adoption/Cards.css";
import Pagination from "../Pagination/Pagination";

const LostPets = () => {

	const pets = useSelector((state) => state.pets);
	const actualPage = useSelector((state) => state.actualPage);


  const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getLostPets());
	}, [dispatch]);

	const [PetPerPage] = useState(9);

	const lastIndex = actualPage * PetPerPage;
	const firstIndex = lastIndex - PetPerPage;
	const currentPetPerPage = pets.slice(firstIndex, lastIndex);

	return (
		<>
			<Navbar />
			<br />
			<div className="example">
				<FilterBarLost value={"lostPets"}/>
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

export default LostPets;
