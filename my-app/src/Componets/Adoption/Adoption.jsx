import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBarAdoption from "./FilterBarAdoption";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getAdoptionPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./FilterBar.css";

const Adoption = () => {
  const pets = useSelector((state) => state.pets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdoptionPets());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div class="example">
        <FilterBarAdoption />
      </div>

      <div className="cardsContainer">
        {!pets?.length ? (
          <p>No hay mascotas</p>
        ) : (
          pets?.map((el) => (
            <Link to={`/pets/${el.id}`} key={el.id}>
              <div className="cardsContainerPadding">
                <Card data={el} />
              </div>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Adoption;
