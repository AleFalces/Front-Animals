// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../Navbar/Navbar";
// import { useParams } from "react-router-dom";
// import { petDetails } from "../../Redux/Actions/index";

export const Details = () => {
	// listo para conectar con el back
	// const dispatch = useDispatch();
	// const { paramsId } = useParams();
	// const Detail = useSelector((state) => state.Detail);

	// useEffect(() => {
	// 	dispatch(petDetails(paramsId));
	// }, [dispatch]);

	return (
		<>
			<Navbar />
			<div>
				<div>
					<img
						src={
							"https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
						}
						alt={"dale"}
					/>
					<h1> {"Perro"}</h1>
					<h2>Sexo: {"M"}</h2>
				</div>
				<div>
					<h3>
						Detalle:{"Tiene el pelo cafe  , ademas tiene una patica mala"}
					</h3>

					<p>Area: {"Se encuentra en robledo cerca a la quintana"}</p>
					<p>species: {"no"}</p>
				</div>
			</div>
		</>
	);
};

// listo para cuando conecte el back
// <div>
// 					<img src={Detail?.img} alt={Detail.size} />
// 					<h1> {Detail.size}</h1>
// 					<h2>Sexo: {Detail.sex}</h2>
// 				</div>
// 				<div>
// 					<h3>Detalle:{Detail.detail}</h3>
// 					<p>Rasgos: {Detail.Rasgos}</p>
// 					<p>Area: {Detail.area}</p>
// 					<p>species: {Detail.species}</p>
// 				</div>
