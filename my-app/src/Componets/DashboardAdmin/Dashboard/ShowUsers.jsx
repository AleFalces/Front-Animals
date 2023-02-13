import { SimpleGrid, Stack, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import UserCard from "./Cards/UserCard";
import { getAllUsers } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";


export default function ShowUsers({ users }) {
  
  const dispatch = useDispatch()

  useEffect(()=>{
		dispatch(getAllUsers())
	},[])

  return (
    <Stack spacing="25px">
      <Box bg={"#bae8e8"} maxW="7xl" mx={"auto"} pt={2} px={{ base: 2, sm: 12, md: 17 }} borderRadius="20px"
      color={"blackAlpha.700"}
      fontWeight={700}
      alignItems={"center"}
      lineHeight={1.0}
      fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      textAlign={"center"}
      justifyContent={"center"}>Usuarios
      </Box>
    
    <SimpleGrid columns={[1, 1,2, 3]} spacing='25px' >
      {users.map((user) => (
        
        <UserCard
        id={user.id}
        name={user.name}
        surname={user.surname}
        email={user.email}
        phone={user.phone}
        status={user.status}
        ></UserCard>
        ))}
      </SimpleGrid>
        </Stack>
    
  );
}
