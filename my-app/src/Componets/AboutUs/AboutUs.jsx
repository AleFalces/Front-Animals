import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import img4 from "../../assets/imagenes/img4.jpg";

const AboutUs = () => {
	return (
		<>
			<div>
				<Navbar />
				<img className="d-block w-100 edit" src={img4} alt="First slide" />
				<h1>¿Quienes Somos?</h1>
				<p>
					Somos organización sin fines de lucro liderada por un grupo de
					voluntarios que buscan superar la situación de sobrepoblación,
					abandono, crueldad e indiferencia que viven millones de animales en
					nuestro país. (Buenos Aires/ Argentina). Propiciamos una actitud de
					respeto hacia todas las especies, entendiendo que no son “cosas” para
					ser utilizadas por el ser humano. Rechazamos todo tipo de explotación
					animal, incluyendo su uso como vestimenta, comida, entretenimiento y
					experimentación.
				</p>
				<h1>Nuestros objetivos</h1>
				<ul>
					• Luchar contra el abandono, el maltrato y el sufrimiento animal.
				</ul>
				<ul>
					• Educar sobre el respeto por la vida de los animales a través de
					charlas y talleres educativos en lugares públicos y privados.
				</ul>
				<ul>
					• Organizar campañas de castración gratuitas y/o a bajo costo en las
					zonas vulnerables donde el Estado está ausente y los perros y gatos se
					reproducen sin control.
				</ul>
				<ul>
					• Asistir a animales en situación de riesgo de muerte, brindarles la
					atención médica necesaria para recuperarlos y encontrar familias
					responsables para su adopción.
				</ul>
				<ul>
					• Asesorar a la población respecto a cómo actuar en casos de maltrato
					animal.
				</ul>

				<h1>¿Cómo trabajamos?</h1>
				<ul>
					• La acción directa: asistir a animales abandonados en situación de
					riesgo, promoviendo su adopción y tenencia por parte de hogares
					responsables que estén en condiciones de brindarles albergue, atención
					y afecto.
				</ul>
				<ul>
					• La acción preventiva: fomentar entre el público general la necesidad
					y la importancia de castrar machos y esterilizar las hembras antes del
					primer celo y exigiendo a las autoridades la aplicación de las leyes
					que los obligan a realizar campañas de castración masivas, gratuitas,
					extendidas, sistemáticas y permanentes, como único medio humanitario,
					sustentable y no eutanásico de control de la superpoblación animal.
				</ul>
				<ul>
					• Las actividades asistenciales: rescatar animales en situación de
					riesgo con el fin de recuperarlos y darles la posibilidad de formar
					parte de una familia que le brinde lo que necesita.
				</ul>

				<Footer />
			</div>
		</>
	);
};

export default AboutUs;
