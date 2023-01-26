import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// <button className="btn btn-success" onClick={() => loginWithRedirect()}>
//   Login{" "}
// </button>
// <button className="btn btn-danger" onClick={() => logout()}>
//   Cerrar Sesion
// </button>

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <button className="btn btn-danger" onClick={() => logout()}>
          Cerrar Sesion
        </button>
      ) : (
        <button className="btn btn-success" onClick={() => loginWithRedirect()}>
          Login{" "}
        </button>
      )}
    </>
  );
};

export default Login;
