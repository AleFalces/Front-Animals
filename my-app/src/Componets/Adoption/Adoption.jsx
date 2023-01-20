import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getAllPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "./Cards.css";

const Adoption = () => {
	// const allPets = useSelector((state) => state.allPets);
	const Pets = [
		{
			id: "72c2c436-c2ef-41bf-886c-ca05fb440e35",
			size: "Perro",
			detail: "Esta mal",
			area: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			img: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
			species: "no",
			sex: "M",
		},
		{
			id: "72c2c436-c2ef-41bf-886c-ca05fb440e35",
			size: "Perro",
			detail: "Esta mal",
			area: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			img: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
			species: "no",
			sex: "M",
		},
		{
			id: "72c2c436-c2ef-41bf-886c-ca05fb440e35",
			size: "Perro",
			detail: "Esta mal",
			area: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			img: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
			species: "no",
			sex: "M",
		},
		{
			id: "72c2c436-c2ef-41bf-886c-ca05fb440e35",
			size: "Perro",
			detail: "Esta mal",
			area: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			img: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
			species: "no",
			sex: "M",
		},
		{
			id: "72c2c436-c2ef-41bf-886c-ca05fb440e35",
			size: "Perro",
			detail: "Esta mal",
			area: "Se encuentra en robledo cerca a la quintana",
			Rasgos: "Tiene el pelo cafe  , ademas tiene una patica mala",
			img: "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg",
			species: "no",
			sex: "M",
		},
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPets());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div className="cardsContainer">
				{!Pets?.length ? (
					<p>No hay mascotas</p>
				) : (
					Pets?.map((el) => (
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
