import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";

const ShowPets = () => {
  const pets = useSelector((state) => state.allPets);



  return (
    <div>
      {pets.map((pet) => (
        <div>
            <Card data={pet}/>
        </div>
      ))}
    </div>
  );
};

export default ShowPets