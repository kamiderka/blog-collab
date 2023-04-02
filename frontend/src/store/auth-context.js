import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();
  const [page, setPage] = useState("blog");
  const [loginForm, setLoginForm] = useState(true);

  const loginFormHandler = (page) => {
    setLoginForm(page);
  };

  const value = {
    currentUser,
    page,
    loginForm,
    onChangeForm: loginFormHandler,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
