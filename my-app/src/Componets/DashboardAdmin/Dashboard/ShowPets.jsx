import React from "react";
import PetCard from "./Cards/PetCard";


export default function ShowPets({pets}) {

  return (
    pets.map((pet) => (
      <PetCard
      image={pet.image}
      id={pet.id}
      size={pet.size}
      species={pet.species}
      age={pet.age}
      area={pet.area}
      status={pet.status}
      detail={pet.detail}
      userId={pet.userId}
      ></PetCard>
    ))
  );
};

