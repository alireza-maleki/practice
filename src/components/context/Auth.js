import React, { createContext, useState } from "react";

const Auth = createContext({
  name: "",
  setName: () => {},
  isLoggedIn: Boolean,
  setIsLoggedIn: () => {}
});

export const AuthProvider = (props) => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Auth.Provider
      value={{
        name: name,
        setName: setName,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn
      }}
    >
      {props.children}
    </Auth.Provider>
  );
};

export default Auth;
