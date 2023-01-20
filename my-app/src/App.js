import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../src/Componets/Home/Home";
import { Adoption } from "../src/Componets/Adoption/Adoption";
import { Details } from "../src/Componets/Details/Details";
import { Login } from "../src/Componets/Login/Login";
import { LandingPage } from "../src/Componets/LandingPage/LandingPage";
import { NotFound } from "../src/Componets/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<LandingPage />}></Route>
				<Route exact path="/home" element={<Home />}></Route>
				<Route exact path="/adoption" element={<Adoption />}></Route>
				<Route exact path="/login" element={<Login />}></Route>
				<Route exact path="/pet/:paramsId" element={<Details />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
