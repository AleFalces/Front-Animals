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
import FormPostProduct from "./Componets/DashboardAdmin/Dashboard/FormPostProduct";
import FormAffiliateVets from "./Componets/DashboardAdmin/Dashboard/FormAffiliateVets";
import FormUpdateProduct from "./Componets/DashboardAdmin/Dashboard/FormUpdateProduct";
import LostPets from "./Componets/LostPets/LostPets";
import Veterinaries from "../src/Componets/Veterinaries/Veterinaries";
import DashboardAdmin from "./Componets/DashboardAdmin/DashboardAdmin/DashboardAdmin";
import ProductDetail from "./Componets/Shop/ProductDetail/ProductDetail";
import VetsDetails from "./Componets/VetsDetail/VetsDetail";
import { MyPets } from "./Componets/MyPets/MyPets";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import CreateUserAuth0 from "./Componets/CreateUserAuth0/CreateUserAuth0";
import Cart from "./Componets/Shop/Cart/Cart";

function App() {
	const { getAccessTokenSilently, isAuthenticated } = useAuth0();
	const [token, setToken] = useState("");

	useEffect(() => {
		const validator = async () => {
			const isVerify = await getAccessTokenSilently();
			setToken(isVerify);
		};
		validator();
	}, [getAccessTokenSilently]);


	return isAuthenticated ? (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<LandingPage />}></Route>
				<Route exact path="/home" element={<Home />}></Route>
				<Route exact path="/login" element={<Login />}></Route>
				<Route exact path="/aboutUs" element={<AboutUs />}></Route>
				<Route exact path="/donate" element={<Donate />}></Route>
				<Route exact path="/shop" element={<Shop />}></Route>
				<Route exact path="/createAuth0" element={<CreateUserAuth0 />}></Route>
				<Route exact path="/shop/cart" element={<Cart />}></Route>
				<Route
					path="/shop/product/:productId"
					element={<ProductDetail />}></Route>
				<Route exact path="/pets/:paramsId" element={<Details />}></Route>
				<Route exact path="/dashboard" element={<DashboardAdmin />}></Route>
				<Route
					exact
					path="/dashboard/createProduct"
					element={<FormPostProduct />}></Route>
				<Route
					exact
					path="/dashboard/createVet"
					element={<FormAffiliateVets />}></Route>
				<Route
					exact
					path="/dashboard/updateProduct"
					element={<FormUpdateProduct />}></Route>
				<Route exact path="/adoptions" element={<Adoption />}></Route>
				<Route exact path="/lostPets" element={<LostPets />}></Route>
				<Route exact path="/veterinary" element={<Veterinaries />}></Route>
				<Route
					exact
					path="/veterinary/:paramsId"
					element={<VetsDetails />}></Route>
				<Route
					exact
					path="/createPet"
					element={<FormPostPet token={token} />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	) : (
		/*  </ChakraProvider> */
		<div className="App">
			<Routes>
				<Route
					exact
					path="/dashboard"
					element={<DashboardAdmin token={token} />}></Route>
				<Route exact path="/donate" element={<Donate />}></Route>
				<Route
					exact
					path="/createPet"
					element={<FormPostPet token={token} />}></Route>
				<Route exact path="/createAuth0" element={<CreateUserAuth0 />}></Route>
				<Route exact path="/" element={<LandingPage />}></Route>
				<Route exact path="/createUser" element={<FormPostUser />}></Route>
				<Route exact path="/home" element={<Home />}></Route>
				<Route exact path="/aboutUs" element={<AboutUs />}></Route>
				<Route exact path="/pets/:paramsId" element={<Details />}></Route>
				<Route exact path="/adoptions" element={<Adoption />}></Route>
				<Route exact path="/lostPets" element={<LostPets />}></Route>
				<Route exact path="/veterinary" element={<Veterinaries />}></Route>
				<Route exact path="/shop" element={<Shop />}></Route>
				<Route
					exact
					path="/veterinary/:paramsId"
					element={<VetsDetails />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);

}

export default App;
