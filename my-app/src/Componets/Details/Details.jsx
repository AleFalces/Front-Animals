import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
import "./Detail.css";

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
			<div className="middleContainer"> 
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
			</div>
			
			<Footer />

		</div>
	);

};

export default Details;
