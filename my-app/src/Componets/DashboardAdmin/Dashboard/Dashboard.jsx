import React from "react";
import { getAllProducts, getAllUsers, getAllPets, getAllVeterinaries } from "../../../Redux/Actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowUsers from "./ShowUsers";
import ShowPets from "./ShowPets";
import ShowProducts from "./ShowProducts";
import ShowVets from "./ShowVets";
import { Button } from "@chakra-ui/react";


const Dashboard = () => {
  const dispatch = useDispatch();

  const [selection, setSelection] = useState("");
  const usersArray = useSelector((state) => state.allUsers)
  const productsArray = useSelector((state) => state.allProducts)
  const vetsArray = useSelector((state) => state.allVets)
  const petsArray = useSelector((state) => state.allPets)

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
    dispatch(getAllVeterinaries())
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={(e) => handlerShowDataUsers(e)}>Usuarios registrados</button>
      </div>
      <div>
        <button onClick={(e) => handlerShowDataPets(e)}>Mascotas</button>
      </div>
      <div>
        <button onClick={(e) => handlerShowDataProducts(e)}>Productos</button>
      </div>
      <div>
        <button onClick={(e) => handlerShowDataVets(e)}>Veterinarias</button>
      </div>
      <div>
      
        {selection === "users" ? (
          <ShowUsers users={usersArray}/>
        ) : selection === "products" ? (
          <ShowProducts products={productsArray}/>
        ) : selection === "pets" ? (
          <ShowPets pets={petsArray}/>
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

