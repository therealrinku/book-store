import React from "react";

const UserContext = React.createContext({
  accessToken: "",
  setAccessToken: () => {},
  userEmail: "",
  setUserEmail: () => {},
});

export default UserContext;
