import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { VeterinaryDetails } from "../../Redux/Actions/index";

const VetsDetails = () => {
	const dispatch = useDispatch();
	const { paramsId } = useParams();
	const Detail = useSelector((state) => state.vetsDetail);
	const vetsDetail = Detail[0];

	useEffect(() => {
		dispatch(VeterinaryDetails(paramsId));
	}, [dispatch]);
	console.log(vetsDetail);
	return (
		<>
			<Navbar />
			{!Detail?.length ? (
				<p>Cargando veterinaria</p>
			) : (
				<div>
					<img src={vetsDetail.image} alt={Detail[0].image} />
					<p> Nombre : {vetsDetail.name}</p>
					<p> Dirección: {vetsDetail.address}</p>
					<p> Telefono: {vetsDetail.phone}</p>
					<p> Email:{vetsDetail.email}</p>
					<p> Description : {vetsDetail.description}</p>
				</div>
			)}
			<Footer />
		</>
	);
};

export default VetsDetails;
