import React from "react";
import { useSelector } from "react-redux";


const ShowUsers = () => {

  const users = useSelector((state) => state.allUsers);
  console.log(users);

  return (
    <div>
        {users.map((user) => (
            <>{user.name}<br /></>
        ))}
    </div>
  );
};

export default ShowUsers;
