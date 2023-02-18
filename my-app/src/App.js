import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Componets/Home/Home";
import Pets from "../src/Componets/Adoption/Pets";
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
import Veterinaries from "../src/Componets/Veterinaries/Veterinaries";
import DashboardAdmin from "./Componets/DashboardAdmin/DashboardAdmin/DashboardAdmin";
import ProductDetail from "./Componets/Shop/ProductDetail/ProductDetail";
import VetsDetails from "./Componets/VetsDetail/VetsDetail";
import { MyPets } from "./Componets/MyPets/MyPets";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import CreateUserAuth0 from "./Componets/CreateUserAuth0/CreateUserAuth0";
import Cart from "./Componets/Shop/Cart/Cart";
import Banned from "./Componets/Banned/Banned";
import Navbar from "./Componets/Navbar/Navbar";

function App() {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  const loggedUser = localStorage.getItem("loggedUser");
  const [userFlag, setUserFlag] = useState(false);
  const [usuario, setUsuario] = useState([]);

  function handleSetUserFlag() {
    if (userFlag) {
      console.log("Seteando userFlag false");
      setUserFlag(false);
    } else {
      console.log("Seteando userFlag true");
      setUserFlag(true);
    }
  }

  useEffect(() => {
    const validator = async () => {
      const isVerify = await getAccessTokenSilently();
      setToken(isVerify);
    };
    validator();
  }, [getAccessTokenSilently]);

  useEffect(() => {
    console.log("LoggedUser: ", JSON.parse(localStorage.getItem("loggedUser")));
    if (loggedUser) {
      const logged = JSON.parse(loggedUser);
      setUsuario(logged);
    } else {
      console.log("Seteando usuario en [] useEffect App.js");
      setUsuario([]);
    }
  }, [loggedUser]);


  useEffect(() => {}, [userFlag, usuario]);
  console.log("USUARIO APP", usuario);

  //!   ↓↓↓↓↓↓↓  A PARTIR DE ACÁ ESTÁ EL RENDER DE LAS RUTAS SEGUN CORRESPONDA  ↓↓↓↓↓↓↓
  //!          * EL ORDEN ES IMPORTANTE!
  //!  ↓↓↓↓↓ ↓↓↓↓↓     RUTAS 17/02/23     ↓↓↓↓↓ ↓↓↓↓↓
  if (usuario[0]?.status === "banned") {
    //?          CASO ESTÁ BANNEADO
    console.log("CASO ESTÁ BANNEADO, APP.js");
    return (
      <div className="App">
        <Routes>
          <Route exact path="/banned" element={<Banned />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }

  if (usuario[0] === undefined) {
    //?          CASO NO HAY USUARIO LOGEADO
    console.log("CASO NO HAY USUARIO LOGEADO, APP.js");

    return (
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <Home
                setUsuario2={setUsuario}
                handleSetUserFlag={handleSetUserFlag}
              />
            }
          ></Route>
          <Route
            exact
            path="/donate"
            element={<Donate handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/veterinary"
            element={<Veterinaries handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/aboutUs"
            element={
              <AboutUs
                setUsuario={setUsuario}
                handleSetUserFlag={handleSetUserFlag}
              />
            }
          ></Route>
          <Route
            exact
            path="/adoptions"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"adoptions"} />
            }
          ></Route>
          <Route
            exact
            path="/lostPets"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"lostPets"} />
            }
          ></Route>
          <Route
            path="*"
            element={<NotFound handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/createAuth0"
            element={<CreateUserAuth0 />}
          ></Route>
        </Routes>
      </div>
    );
  }
  if (usuario[0]?.role === "admin") {
    //?          CASO ES ADMIN
    console.log("CASO ES ADMIN, APP.js");

    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage handleSetUserFlag={handleSetUserFlag} />}
          ></Route>

          <Route
            exact
            path="/shop"
            element={<Shop handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            path="/shop/product/:productId"
            element={<ProductDetail handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route exact path="/shop/cart" element={<Cart />}></Route>
          <Route
            exact
            path="/dashboard"
            element={<DashboardAdmin token={token} />}
          ></Route>
          <Route
            exact
            path="/donate"
            element={<Donate handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/createPet"
            element={
              <FormPostPet
                handleSetUserFlag={handleSetUserFlag}
                token={token}
              />
            }
          ></Route>
          <Route
            exact
            path="/updatePet/:id"
            element={
              <FormPostPet
                handleSetUserFlag={handleSetUserFlag}
                token={token}
                value={"update"}
              />
            }
          ></Route>
          <Route
            exact
            path="/createAuth0"
            element={<CreateUserAuth0 />}
          ></Route>
          <Route exact path="/createUser" element={<FormPostUser />}></Route>
          <Route
            exact
            path="/updateUser"
            element={<FormPostUser id={usuario.id} value={"update"} />}
          ></Route>
          <Route
            exact
            path="/updateUser"
            element={<FormPostUser value={"update"} />}
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <Home
                setUsuario2={setUsuario}
                handleSetUserFlag={handleSetUserFlag}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutUs"
            element={<AboutUs handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/pets/:paramsId"
            element={<Details handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/adoptions"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"adoptions"} />
            }
          ></Route>
          <Route
            exact
            path="/lostPets"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"lostPets"} />
            }
          ></Route>
          <Route
            exact
            path="/myPets"
            element={<MyPets handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/veterinary"
            element={<Veterinaries handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/veterinary/:paramsId"
            element={<VetsDetails handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/dashboard/createProduct"
            element={<FormPostProduct />}
          ></Route>
          <Route
					exact
					path="/dashboard/updateProduct/:id"
					element={<FormPostProduct token={token} value = "update" />}></Route>
          <Route
            exact
            path="/dashboard/createVet"
            element={<FormAffiliateVets />}
          ></Route>
          <Route
					exact
					path="/dashboard/updateVet/:id"
					element={<FormAffiliateVets token={token} value="updateVet"/>}></Route>
          ></Route>
          <Route
            exact
            path="/dashboard/updateProduct"
            element={<FormUpdateProduct />}
          ></Route>
          <Route
            path="*"
            element={<NotFound handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
        </Routes>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
      </div>
    );
  }
  if (usuario[0]?.role === "user") {
    //?          CASO ES USER
    console.log("CASO ES USER, APP.js");
    return (
      <div className="App">
        <Routes>
          <Route
            path="/shop/product/:productId"
            element={<ProductDetail handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/shop/cart"
            element={<Cart handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route exact path="/banned" element={<Banned />}></Route>
          {/* <Route
            exact
            path="/dashboard"
            element={<DashboardAdmin token={token} />}
          ></Route> */}
          <Route
            exact
            path="/donate"
            element={<Donate handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/createPet"
            element={
              <FormPostPet
                handleSetUserFlag={handleSetUserFlag}
                token={token}
              />
            }
          ></Route>
          <Route
            exact
            path="/updatePet/:id"
            element={
              <FormPostPet
                handleSetUserFlag={handleSetUserFlag}
                token={token}
                value={"update"}
              />
            }
          ></Route>
          <Route
            exact
            path="/createAuth0"
            element={<CreateUserAuth0 />}
          ></Route>
          <Route
            exact
            path="/"
            element={<LandingPage handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route exact path="/createUser" element={<FormPostUser />}></Route>
          <Route
            exact
            path="/updateUser"
            element={<FormPostUser id={usuario.id} value={"update"} />}
          ></Route>
          <Route
            exact
            path="/updateUser"
            element={<FormPostUser value={"update"} />}
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <Home
                setUsuario2={setUsuario}
                handleSetUserFlag={handleSetUserFlag}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutUs"
            element={<AboutUs handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/pets/:paramsId"
            element={<Details handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/adoptions"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"adoptions"} />
            }
          ></Route>
          <Route
            exact
            path="/lostPets"
            element={
              <Pets handleSetUserFlag={handleSetUserFlag} value={"lostPets"} />
            }
          ></Route>
          <Route
            exact
            path="/myPets"
            element={<MyPets handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/veterinary"
            element={<Veterinaries handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/shop"
            element={<Shop handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/veterinary/:paramsId"
            element={<VetsDetails handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
          <Route
            exact
            path="/dashboard/createProduct"
            element={<FormPostProduct />}
          ></Route>
          <Route
            exact
            path="/dashboard/createVet"
            element={<FormAffiliateVets />}
          ></Route>
          <Route
            exact
            path="/dashboard/updateVet/:id"
            element={<FormAffiliateVets value={"updateVet"} />}
          ></Route>
          <Route
            exact
            path="/dashboard/updateProduct"
            element={<FormUpdateProduct />}
          ></Route>
          <Route
            path="*"
            element={<NotFound handleSetUserFlag={handleSetUserFlag} />}
          ></Route>
        </Routes>
      </div>
    );
  }
  //
  //
  //
  //
  //
  //! ↓↓↓↓↓↓↓↓↓↓↓↓        RUTAS 09/02        ↓↓↓↓↓↓↓↓↓↓↓↓
  //   return usuario[0]?.status === "banned" ? (
  //     <div className="App">
  //       {console.log("CASO ESTA BANNEADO, APP")}
  //       <Routes>
  //         <Route exact path="/banned" element={<Banned />}></Route>
  //         <Route path="*" element={<NotFound />}></Route>
  //       </Routes>
  //     </div>
  //   ) : usuario[0]?.role === "admin" ? (
  //     // SI EL ROL ES ADMIN
  //     <div className="App">
  //       {console.log("CASO ES ADMIN, APP")}
  //       <Routes>
  //         <Route
  //           path="/shop/product/:productId"
  //           element={<ProductDetail />}
  //         ></Route>
  //         <Route exact path="/shop/cart" element={<Cart />}></Route>
  //         <Route exact path="/banned" element={<Banned />}></Route>
  //         <Route
  //           exact
  //           path="/dashboard"
  //           element={<DashboardAdmin token={token} />}
  //         ></Route>
  //         <Route exact path="/donate" element={<Donate />}></Route>
  //         <Route
  //           exact
  //           path="/createPet"
  //           element={<FormPostPet token={token} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/updatePet/:id"
  //           element={<FormPostPet token={token} value={"update"} />}
  //         ></Route>
  //         <Route exact path="/createAuth0" element={<CreateUserAuth0 />}></Route>
  //         <Route exact path="/" element={<LandingPage />}></Route>
  //         <Route exact path="/createUser" element={<FormPostUser />}></Route>
  //         <Route
  //           exact
  //           path="/updateUser"
  //           element={<FormPostUser id={usuario.id} value={"update"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/updateUser"
  //           element={<FormPostUser value={"update"} />}
  //         ></Route>
  //         <Route exact path="/home" element={<Home handleSetUserFlag={handleSetUserFlag}/>}></Route>
  //         <Route exact path="/aboutUs" element={<AboutUs />}></Route>
  //         <Route exact path="/pets/:paramsId" element={<Details />}></Route>
  //         <Route
  //           exact
  //           path="/adoptions"
  //           element={<Pets value={"adoptions"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/lostPets"
  //           element={<Pets value={"lostPets"} />}
  //         ></Route>
  //         <Route exact path="/myPets" element={<MyPets />}></Route>
  //         <Route exact path="/veterinary" element={<Veterinaries />}></Route>
  //         <Route exact path="/shop" element={<Shop />}></Route>
  //         <Route
  //           exact
  //           path="/veterinary/:paramsId"
  //           element={<VetsDetails />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/createProduct"
  //           element={<FormPostProduct />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/createVet"
  //           element={<FormAffiliateVets />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/updateVet/:id"
  //           element={<FormAffiliateVets value={"updateVet"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/updateProduct"
  //           element={<FormUpdateProduct />}
  //         ></Route>
  //         <Route path="*" element={<NotFound />}></Route>
  //       </Routes>
  //     </div>
  //   ) : (
  //     // SI EL ROL NO ES ADMIN SE MUESTRAN ESTAS RUTAS
  //     <div className="App">
  //       {console.log("CASO ES USER, APP")}
  //       <Routes>
  //         <Route
  //           path="/shop/product/:productId"
  //           element={<ProductDetail />}
  //         ></Route>
  //         <Route exact path="/shop/cart" element={<Cart />}></Route>
  //         <Route exact path="/banned" element={<Banned />}></Route>
  //         {/* <Route
  //           exact
  //           path="/dashboard"
  //           element={<DashboardAdmin token={token} />}
  //         ></Route> */}
  //         <Route exact path="/donate" element={<Donate />}></Route>
  //         <Route
  //           exact
  //           path="/createPet"
  //           element={<FormPostPet token={token} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/updatePet/:id"
  //           element={<FormPostPet token={token} value={"update"} />}
  //         ></Route>
  //         <Route exact path="/createAuth0" element={<CreateUserAuth0 />}></Route>
  //         <Route exact path="/" element={<LandingPage />}></Route>
  //         <Route exact path="/createUser" element={<FormPostUser />}></Route>
  //         <Route
  //           exact
  //           path="/updateUser"
  //           element={<FormPostUser id={usuario.id} value={"update"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/updateUser"
  //           element={<FormPostUser value={"update"} />}
  //         ></Route>
  //         <Route exact path="/home" element={<Home handleSetUserFlag={handleSetUserFlag}/>}></Route>
  //         <Route exact path="/aboutUs" element={<AboutUs />}></Route>
  //         <Route exact path="/pets/:paramsId" element={<Details />}></Route>
  //         <Route
  //           exact
  //           path="/adoptions"
  //           element={<Pets value={"adoptions"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/lostPets"
  //           element={<Pets value={"lostPets"} />}
  //         ></Route>
  //         <Route exact path="/myPets" element={<MyPets />}></Route>
  //         <Route exact path="/veterinary" element={<Veterinaries />}></Route>
  //         <Route exact path="/shop" element={<Shop />}></Route>
  //         <Route
  //           exact
  //           path="/veterinary/:paramsId"
  //           element={<VetsDetails />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/createProduct"
  //           element={<FormPostProduct />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/createVet"
  //           element={<FormAffiliateVets />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/updateVet/:id"
  //           element={<FormAffiliateVets value={"updateVet"} />}
  //         ></Route>
  //         <Route
  //           exact
  //           path="/dashboard/updateProduct"
  //           element={<FormUpdateProduct />}
  //         ></Route>
  //         <Route path="*" element={<NotFound />}></Route>
  //       </Routes>
  //     </div>
  //   );
}

export default App;
