import React, { useContext, useEffect, useCallback } from "react";
import "./dashboard.css";
import withAuth from "../../utility/withAuth";
import store from "../../store/store";
import axios from "axios";
import { SERVER_URL } from "../../helpers/constant";

function Dashboard() {
  const { state } = useContext(store);
  const { user } = state;
  const fetchUser = useCallback(() => {
    const url = SERVER_URL + "/protected/" + localStorage.getItem("userId");
    axios
      .get(url, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}

export default withAuth(Dashboard);
