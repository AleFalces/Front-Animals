import React from "react";
import PetCard from "./Cards/PetCard";
import { SimpleGrid, Center } from "@chakra-ui/react";

export default function ShowPets({pets}) {

  return (

    <SimpleGrid columns={[1, 2, 3]} spacing='40px' >
   {pets.map((pet) => (
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
    ))}
</SimpleGrid>
  );
};

