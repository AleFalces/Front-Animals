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
  }, []);
  return (
    <>
      <Navbar />
      <div class="div-modified">
          <h1 class="textDecorate"> ¡Ups! Lo siento, esta página no existe. Redireccionandote al Home en 5 seg...</h1>
        <section class="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
        </section>
      </div>
      <div className="footerPlace"> {/* agregue */}
      <Footer />
      </div>
    </>
  );
};

export default NotFound;
