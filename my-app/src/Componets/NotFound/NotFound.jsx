import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const redirect = () => setTimeout(() => navigate("/home"), 5000);

	useEffect(() => {
		redirect();
	}, []);
	return (
		<>
			<Navbar />
			<div className="soft-not-found">
				<h1>Route not found, redirecting to home in 5 seconds...</h1>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
