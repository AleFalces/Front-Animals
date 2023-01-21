import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";

const Details = () => {
	const dispatch = useDispatch();
	const { paramsId } = useParams();
	const Det = useSelector((state) => state.Detail);

	useEffect(() => {
		dispatch(petDetails(paramsId));
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<div>
				<img src={Det?.img} alt={Det.size} />
				<p> size: {Det.size}</p>
				<p>Sexo: {Det.sex}</p>
				<p>Detalle:{Det.detail}</p>
				<p>Edad: {Det.age}</p>
				<p>Area: {Det.area}</p>
				<p>species: {Det.species}</p>
			</div>
			<Footer />
		</>
	);
};

export default Details;
