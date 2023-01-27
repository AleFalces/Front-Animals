import "./App.css"; 
import { Route, Routes } from "react-router-dom";
import Home from "../src/Componets/Home/Home";
import Adoption from "../src/Componets/Adoption/Adoption";
import Details from "../src/Componets/Details/Details";
import Login from "../src/Componets/Login/Login";
import LandingPage from "../src/Componets/LandingPage/LandingPage";
import NotFound from "../src/Componets/NotFound/NotFound";
import Donate from "./Componets/Donate/Donate";
import AboutUs from "./Componets/AboutUs/AboutUs";
import Shop from "./Componets/Shop/Shop";
import FormPostPet from "./Componets/FormPostPet/FormPostPet";
import FormPostUser from "./Componets/FormPostUser/FormPostUser";
import LostPets from "./Componets/LostPets/LostPets";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/aboutUs" element={<AboutUs />}></Route>
        <Route exact path="/donate" element={<Donate />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/pets/:paramsId" element={<Details />}></Route>
        <Route exact path="/createPet" element={<FormPostPet />}></Route>
        <Route exact path="/createUser" element={<FormPostUser />}></Route>
        <Route exact path="/adoptions" element={<Adoption />}></Route>
        <Route exact path="/lostPets" element={<LostPets />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
