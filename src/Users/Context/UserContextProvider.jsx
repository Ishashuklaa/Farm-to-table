import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <UserContext.Provider value={{ loggedin, setLoggedin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
