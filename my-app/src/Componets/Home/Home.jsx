import React from "react";
import Navbar from "../Navbar/Navbar";
// import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import { Center, Square, Circle, Box } from "@chakra-ui/react";

const Home = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      <Navbar />
      <Box h={"1500"} bg="brand.backgorund">
        {/* <Carousel /> */}
      </Box>
      <div className="home">{/* <Carousel /> */}</div>
      <Footer />
    </>
  );
};
export default Home;

// .home {
//   height: 200vh;
//   background: #f6f5f5;
// }
