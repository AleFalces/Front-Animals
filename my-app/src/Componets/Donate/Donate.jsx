import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

const Donate = () => {
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
					<button>500</button>
				</div>
				<div>
					<button>1000</button>
				</div>
				<div>
					<button>2000</button>
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
