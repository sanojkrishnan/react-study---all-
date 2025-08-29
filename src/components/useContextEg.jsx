import React, { useState } from "react";
import UsersForContext from "./childComponent/usersForContext";
import UserContext from "./contextDeclaring/userContext";

const ContextEg = () => {
  const [userName, setUserName] = useState("Nisha"); //i have used state to make the value dynamic

  const handleChange = (event) => {
    setUserName(event.target.value);
  }

  return (
    <UserContext.Provider value={userName}>

      <h1>context</h1>
      <input type="text" value={userName} onChange={handleChange} />
      <UsersForContext />

    </UserContext.Provider>
  );
};

export default ContextEg;
