import React, { useEffect, useState, useContext } from "react";
import checkLogin from "../helpers/checkLogin";
import history from "./history";
import store from "../store/store";
import { SET_TOKEN } from "../helpers/constant";

const withAuth = (AuthComponent) => {
  const AuthWrapped = () => {
    const { dispatch } = useContext(store);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      //check if it's still authenticated
      const isConfirmed = checkLogin();

      if (!isConfirmed) {
        history.push("/login");
        window.location.reload();
      } else {
        dispatch({ type: SET_TOKEN, payload: localStorage.getItem("token") });
        setIsAuthenticated(true);
      }
    }, [dispatch]);

    if (isAuthenticated) {
      return (
        /* component that is currently being wrapper(App.js) */
        <AuthComponent />
      );
    } else {
      return null;
    }
  };

  return AuthWrapped;
};
export default withAuth;
