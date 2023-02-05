import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import NotFound from "../NotFound/NotFound";

import axios from "axios";
const Donate = () => {

	const url = `http://localhost:3001`

	const payMp = async (e)=>{
		const value= e.target.value;
		const unit_price = parseInt(value);
		axios.post(`${url}/donation`,
		 {
			unit_price: unit_price,
			title : 'Gracias por su colaboración'
		})
		.then(response => {
			window.open(response.data, '_blank');
		  })
		  .catch(error => {
			console.error(error);
		  });
	};

	const subscription = async () => {
		const user = JSON.parse(window.localStorage.getItem("loggedUser"));
		const email = user.map(e=>e.email);
		axios.post(`${url}/donation/subscription`, {
			email: email[0],
		}).then(response => {
			console.log("LINK" +response.data);
			window.open(response.data, '_blank');
		}).catch(error => {
			console.log(error)
		})
	}



	return (
		<>
			<div>
				<Navbar />
				<h1> Podes ayudarnos</h1>
				<p>
					Tu aporte nos permite continuar llevando a cabo actividades
					sanitarias, educativas y de asistencialismo. Los aportes económicos
					son importantes para pagar tratamientos, estudios médicos y honorarios
					veterinarios, comprar insumos y alimento, financiar campañas de
					castración en zonas carenciadas, imprimir material de difusión entre
					otros.
				</p>
				<label>Aporte unico</label>
				<div>
					<button onClick={(e)=>payMp(e)} value="500">500</button>
				</div>
				<div>
					<button onClick={(e)=>payMp(e)} value="1000">1000</button>
				</div>
				<div>
					<button onClick={(e)=>payMp(e)} value="2000">2000</button>
				</div>
				<div>
					<button onClick={() => subscription()}>
						Suscribite para ayudarnos mensualmente
						</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Donate;
