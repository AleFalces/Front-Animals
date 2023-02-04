import React from "react";
import UserCard from "./Cards/UserCard";


export default function ShowUsers({ users }) {
  
  return (
      users.map((user) => (
        <UserCard
          id={user.id}
          name={user.name}
          surname={user.surname}
          email={user.email}
          phone={user.phone}
          status={user.status}
        ></UserCard>
      ))
  );
}
