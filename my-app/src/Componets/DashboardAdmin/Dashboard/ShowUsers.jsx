import { SimpleGrid, Center } from "@chakra-ui/react";
import React from "react";
import UserCard from "./Cards/UserCard";


export default function ShowUsers({ users }) {
  
  return (
    
    <SimpleGrid columns={[1, 2, 2]} spacing='10px' >
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
    
  );
}
