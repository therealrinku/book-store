import React from "react";

const UserContext = React.createContext({
  accessToken: "",
  setAccessToken: () => {},
  userEmail: "",
  setUserEmail: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

export default UserContext;
