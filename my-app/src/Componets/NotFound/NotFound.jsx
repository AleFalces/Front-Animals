import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const redirect = () => setTimeout(() => navigate("/home"), 5000);

  useEffect(() => {
    redirect();

  }, [redirect]);
  return (
    <div>
      <Navbar />
      <div className="contenedor-notFound">
        <h2 className="texto-NotFound">
          We are working on this section, redirecting to home in 5 seconds...
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>

  );
};

export default NotFound;
