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
						<h3>Especie <p>{Det.species}</p> </h3> 
						<h3>Tamaño <p>{Det.size}</p> </h3>
						<h3>Sexo <p>{Det.sex}</p> </h3>  
						<h3>Detalle <p> {Det.detail}</p> </h3> 
						<h3>Edad <p> {Det.age}</p> </h3> 
						<h3>Area <p>{Det.area}</p> </h3> 
						
						</div>
					</div>
				</div> 
			</div>
			
			<Footer />

		</div>
	);

};

export default Details;
