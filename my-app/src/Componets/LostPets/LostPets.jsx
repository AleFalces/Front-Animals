import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBarLost from "./FilterBarLost";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getLostPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "../Adoption/Cards.css";

const LostPets = () => {
	const pets = useSelector((state) => state.pets);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLostPets())
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<br />
			<div className="example"><FilterBarLost/></div>

			<div className="cardsContainer">
				{!pets?.length ? (
					<p>No hay mascotas</p>
				) : (
					pets?.map((el) => (
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

export default LostPets;