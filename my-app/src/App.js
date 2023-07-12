import "./App.css";
import {
  isNotLogged,
  isBanned,
  isUser,
  isAdm,
} from "./utils/functionsApp/functionsApp";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log("USUARIO APP", usuario);
  }, [userFlag, usuario]);

  if (usuario[0]?.status === "banned") {
    return isBanned();
  }
  if (usuario[0] === undefined) {
    return isNotLogged(handleSetUserFlag, setUsuario);
  }
  if (usuario[0]?.role === "admin") {
    return isAdm(handleSetUserFlag, setUsuario, usuario[0], token);
  }
  if (usuario[0]?.role === "user") {
    return isUser(handleSetUserFlag, setUsuario, usuario[0], token);
  }
}

export default App;
