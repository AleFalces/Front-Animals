import React from "react";
import { getAllProducts, getAllUsers, getPets, getAllVeterinaries } from "../../../Redux/Actions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowUsers from "./ShowUsers";
import ShowPets from "./ShowPets";
import ShowProducts from "./ShowProducts";
import ShowVets from "./ShowVets";
import { Button, Box, Center , SimpleGrid} from "@chakra-ui/react";



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
    dispatch(getPets())
    dispatch(getAllProducts())
    dispatch(getAllVeterinaries())
  }, [dispatch]);

  return (
    <Box bg="brand.green.200" pb='100px'pt='1rem'>
      <SimpleGrid columns={[2, 4, 4]} mb='2rem'>
      <Box>
        <Button bg="orange.100" onClick={(e) => handlerShowDataUsers(e)}>Usuarios registrados</Button>
      </Box>
      <Box>
        <Button  bg="orange.100" onClick={(e) => handlerShowDataPets(e)}>Mascotas</Button>
      </Box>
      <Box>
        <Button bg="orange.100" onClick={(e) => handlerShowDataProducts(e)}>Productos</Button>
      </Box>
      <Box>
        <Button bg="orange.100" onClick={(e) => handlerShowDataVets(e)}>Veterinarias</Button>
      </Box>
      </SimpleGrid>

      <Center>
        <Box>
          {selection === "users" ? (
            <ShowUsers users={usersArray} />
          ) : selection === "products" ? (
            <ShowProducts products={productsArray} />
          ) : selection === "pets" ? (
            <ShowPets pets={petsArray} />
          ) : selection === "vets" ? (
            <ShowVets vets={vetsArray} />
          ) : (
            <>{null}</>
          )}
        </Box>
      </Center>
    </Box>
  );
};

export default Dashboard;

