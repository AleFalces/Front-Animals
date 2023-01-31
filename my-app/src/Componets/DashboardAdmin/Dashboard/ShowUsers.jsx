import React from "react";
import UserCard from "./Cards/UserCard";
// import { useSelector } from "react-redux";

export default function ShowUsers({ users }) {

  return (
      users.map((user) => (
        <UserCard
          id={user.id}
          name={user.name}
          surname={user.surname}
          email={user.email}
          phone={user.phone}
          role={user.role}
        ></UserCard>
      ))
  );
}
