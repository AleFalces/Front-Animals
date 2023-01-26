import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";

const Home = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="home">
        <Slider />
        <br />
        <hr />
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
        <br />
      </div>
      <Footer />
    </>
  );
};
export default Home;
