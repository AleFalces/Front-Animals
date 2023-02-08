import { SimpleGrid, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import UserCard from "./Cards/UserCard";
import { getAllUsers } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";


export default function ShowBannedUsers({ bannedUsers }) {
  
  const dispatch = useDispatch()

  useEffect(()=>{
		dispatch(getAllUsers())
	},[])

  return (
    
    <SimpleGrid columns={[1, 1,2, 3]} spacing='25px' >
      {bannedUsers.map((user) => (
       
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
    
  );
}