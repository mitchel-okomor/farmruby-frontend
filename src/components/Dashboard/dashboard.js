import React, { useContext, useEffect, useCallback } from "react";
import "./dashboard.css";
import withAuth from "../../utility/withAuth";
import store from "../../store/store";
import axios from "axios";
import { SERVER_URL } from "../../helpers/constant";
import Logout from "../../helpers/Logout";

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

  const LogoutUser = () => {
    Logout();
  };

  return (
    <div className="dashboard">
      <div>
        <h1>Welcome, {user ? user.name : "user"}</h1>
      </div>

      <div>
        <button
          className="logout"
          onClick={() => {
            LogoutUser();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
