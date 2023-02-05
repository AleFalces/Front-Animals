import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBar from "./FilterBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import { SimpleGrid, Box  } from '@chakra-ui/react'
import Pagination from "../Pagination/Pagination";

const Adoption = ({ value }) => {
  const pets = useSelector((state) => state.pets);
  const actualPage = useSelector((state) => state.actualPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets(value))
  }, [dispatch, value]);

  const [PetPerPage] = useState(3);

  const lastIndex = actualPage * PetPerPage;
  const firstIndex = lastIndex - PetPerPage;
  const currentPetPerPage = pets.slice(firstIndex, lastIndex);

  return (
    <>
      <Navbar />

        <FilterBar value={value} />


      <Box my='1rem'>
        <Pagination pets={pets} PetPerPage={PetPerPage} />
      </Box> 


   






















      <SimpleGrid columns={[1, 2, 3]} spacing='40px' >
        {!pets?.length ? (
          <p>No hay mascotas</p>
        ) :
          currentPetPerPage?.map((el) => (
            (
              <Link to={`/pets/${el.id}`} key={el.id}>
                <Card data={el} />
              </Link>
            ))
          )}
      </SimpleGrid>
      <Footer />
    </>
  );
};

export default Adoption;
