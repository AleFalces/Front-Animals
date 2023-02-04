import React from "react";
import { getAllProducts, getAllUsers, getAllPets } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowUsers from "./ShowUsers";
import ShowPets from "./ShowPets";
import ShowProducts from "./ShowProducts";
import ShowVets from "./ShowVets";


const Dashboard = () => {
  const dispatch = useDispatch();

  const [selection, setSelection] = useState("");
  const usersArray = useSelector((state) => state.allUsers)
  const productsArray = useSelector((state) => state.allProducts)
  const vetsArray = useSelector((state) => state.allVets)

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
  function handlerShowDataVets(e) {
    e.preventDefault();
    setSelection("vets");
  }

 
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPets())
    dispatch(getAllProducts())
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={(e) => handlerShowDataUsers(e)}>Usuarios registrados</button>
        <button onClick={(e) => handlerShowDataPets(e)}>Mascotas</button>
        <button onClick={(e) => handlerShowDataProducts(e)}>Productos</button>
        <button onClick={(e) => handlerShowDataVets(e)}>Veterinarias</button>
      </div>
      <div>
      
        {selection === "users" ? (
          <ShowUsers users={usersArray}/>
        ) : selection === "products" ? (
          <ShowProducts products={productsArray}/>
        ) : selection === "pets" ? (
          <ShowPets/>
        ) : selection === "vets" ? (
          <ShowVets vets={vetsArray}/>
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

