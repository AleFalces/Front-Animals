import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import VetCard from "../VetsCards/VetsCards";
import { getAllVeterinaries } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import MapView from "../Map/MapView";

const Veterinaries = () => {
  const veterinaries = useSelector((state) => state.allVets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVeterinaries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <br />
      <div class="example">
        <MapView veterinaries={veterinaries} />
      </div>

      <div className="cardsContainer">
        {!veterinaries?.length ? (
          <p>No hay veterinarias en tu zona</p>
        ) : (
          veterinaries?.map((el) => (
            <Link to={`/veterinary/${el.id}`} key={el.id}>
              <div className="VetCards">
                <VetCard data={el} />
              </div>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Veterinaries;
