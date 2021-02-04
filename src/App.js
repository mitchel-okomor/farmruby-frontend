import React, { useEffect, useCallback, useContext } from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from "./utility/history";
import Dashboard from "./components/Dashboard/dashboard";
import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import store from "./store/store";
import NotFound from "./components/notfound/notfound";
import {
  SERVER_URL,
  SET_LOADING,
  SET_TOKEN,
  SET_USER,
} from "./helpers/constant";
import axios from "axios";
import Loading from "./components/loading/loading";

function App() {
  const { state, dispatch } = useContext(store);
  const { token, loading } = state;
  const setToken = useCallback(() => {
    dispatch({ type: SET_TOKEN, payload: localStorage.getItem("token") });
  }, [dispatch]);
  const fetchUser = useCallback(() => {
    const url = SERVER_URL + "/protected/" + localStorage.getItem("userId");
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .get(url, {
        headers: {
          token,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: SET_USER, payload: res.data });
        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          dispatch({ type: SET_LOADING, payload: false });
        }
        console.log(err);
        dispatch({ type: SET_LOADING, payload: false });
      });
  }, [token, dispatch]);

  useEffect(() => {
    setToken();
    fetchUser();
  }, [setToken, fetchUser]);

  return (
    <Router history={History}>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
