import React from "react";
import PetCard from "./Cards/PetCard";
import { SimpleGrid, Stack, Box, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ShowPets({ pets }) {
  // console.log("OBJ PETS",pets);
  // const dispatch = useDispatch()
  const pets2 = useSelector((state) => state.allPets);
  const user = useSelector((state) => state.user);

  useEffect(() => {}, [pets2, user]);
  return (
    <Stack spacing="25px">
      <Box
        bg={"#bae8e8"}
        maxW="7xl"
        mx={"auto"}
        pt={2}
        px={{ base: 2, sm: 12, md: 17 }}
        borderRadius="20px"
        color={"blackAlpha.700"}
        fontWeight={700}
        alignItems={"center"}
        lineHeight={1.0}
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        textAlign={"center"}
        justifyContent={"center"}
      >
        Mascotas publicadas
      </Box>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
        {pets.map((pet) => (
          <PetCard
            img={pet.img}
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
    </Stack>
  );
}
