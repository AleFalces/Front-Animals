import React from "react";
import PetCard from "./Cards/PetCard";
import { SimpleGrid} from "@chakra-ui/react";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ShowPets({ pets }) {
	// console.log("OBJ PETS",pets);
	// const dispatch = useDispatch()
	const pets2 = useSelector((state)=> state.allPets)
	const user = useSelector((state)=> state.user)

	useEffect(()=>{

	},[pets2, user])
	return (
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
					userId={pet.userId}></PetCard>
			))}
		</SimpleGrid>
	);
}
