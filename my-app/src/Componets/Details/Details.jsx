import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
import "./Detail.css"

const Details = () => {
	const dispatch = useDispatch();
	const { paramsId } = useParams();
	const Det = useSelector((state) => state.Detail);

	useEffect(() => {
		dispatch(petDetails(paramsId));
	}, [dispatch]);

	return (
		<div className="detailContainer">
			<Navbar />
			 <div className="container2">
				<img src={Det?.img} alt={Det.size}/> 
				<div className="petDescription">
					<div className="petDescription2">
					<p>size: {Det.size}</p>
					<p>Sexo: {Det.sex}</p>
					<p>Detalle:{Det.detail}</p>
					<p>Edad: {Det.age}</p>
					<p>Area: {Det.area}</p>
					<p>species: {Det.species}</p>
					</div>
				</div>
			</div> 
			<section className="banner container2">
				<section>
				</section>
				<div className="bannerImg">
					<img src="https://img.freepik.com/vector-premium/huella-ilustracion-3d-o-pata-perro-o-lobo-tono-blanco_391563-757.jpg?w=2000" alt="" />
					<h2>Adopt me!</h2>
				</div>
			</section>
			<header className="bg_animate">
				<div className="header_nav">
					<div className="container">
					</div>
					
				</div>
			</header>
			<div className="bubless">
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
				<div className="bubbles"></div>
			</div>
			<Footer />

		</div>
	);
};

export default Details;
