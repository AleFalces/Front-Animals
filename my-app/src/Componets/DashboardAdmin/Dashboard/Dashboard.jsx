import React from "react";
import { getAllProducts, getAllUsers, getAllPets } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ShowUsers from "./ShowUsers";
import ShowPets from "./ShowPets";
import ShowProducts from "./ShowProducts";


const Dashboard = () => {
  const dispatch = useDispatch();

  const [selection, setSelection] = useState("");

  function handlerShowDataUsers(e) {
    e.preventDefault();
    setSelection("users");
  }
  
  function handlerShowDataPets(e) {
    e.preventDefault();
    setSelection("pets");
  }
  
  function handlerShowDataProducts(e) {
    e.preventDefault();
    setSelection("products");
  }

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPets())
    dispatch(getAllProducts())
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={(e) => handlerShowDataUsers(e)}>Ver usuarios</button>
        <button onClick={(e) => handlerShowDataPets(e)}>Ver mascotas</button>
        <button onClick={(e) => handlerShowDataProducts(e)}>Ver productos</button>
      </div>
      <div>
      
        {selection === "users" ? (
          <ShowUsers/>
        ) : selection === "products" ? (
          <><ShowProducts/></>
        ) : selection === "pets" ? (
          <ShowPets/>
        ) : (
          <>{null}</>
        )}
      </div>

    </div>
  );
};

export default Dashboard;
//componente para agregar, quitar o editar productos de la tienda
//componente para cargar imagenes
//componente para controlar usuarios: bloquear o desbloqeuar
//componente de solicitudes de cambios generados por el usuario

