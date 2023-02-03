import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import NotFound from "../NotFound/NotFound";

import axios from "axios";
const Donate = () => {


const payMp = async (e)=>{
	const value= e.target.value;
	const unit_price = parseInt(value);
	axios.post(`http://localhost:3001/donation`,
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
					<button>Suscribite para ayudarnos mensualmente</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Donate;
