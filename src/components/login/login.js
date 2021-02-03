import React, { useState, useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import google_logo from "../../assets/google.svg";
import logo from "../../assets/farmruby.png";
import axios from "axios";
import { SERVER_URL, SET_LOADING, SET_MESSAGE } from "../../helpers/constant";
import store from "../../store/store";

function Login() {
  const { state, dispatch } = useContext(store);
  const { loading, message } = state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const handleChange = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      default:
        setPassword(e.target.value);
    }
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: SET_LOADING, payload: true });

    const url = SERVER_URL + "/userlogin";
    const data = { email, password };
    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: SET_MESSAGE,
          payload: "Loggin successfully",
        });
        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

  //toggle show pasword
  const toggle_password = () => {
    showPassword === "password"
      ? setShowPassword("")
      : setShowPassword("password");

    //hide password of 2sec
    setTimeout(function () {
      console.log(showPassword);
      setShowPassword("password");
    }, 2000);
  };

  return (
    <div className="login">
      <div className="left">
        <div className="background">
          <div className="container">
            <div className="intro-container">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="intro">
                <h1>Re-engineering the fresh farm produce.</h1>
              </div>
              <div>
                <button className="btn btn-primary">
                  <Link to="/signup">Sign up</Link>
                </button>
              </div>
            </div>
            <div className="footer-nav">
              <ul className="nav">
                <li>
                  <a href="/about">about us</a>
                </li>
                <li>
                  <a href="/contact">contact us</a>
                </li>
                <li>
                  <a href="/careers">careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-container">
          <div className="get-started">
            <h3>Hello, Get started</h3>
            <p>Join over 200,000 customers from around Nigeria</p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className={`${message} warning`}>{message}</div>

              <div className="input-group">
                <label htmlFor="full-name">Email address</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group password">
                <label htmlFor="password">Password</label> <br />
                <input
                  type={showPassword}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <i
                  className="fa fa-eye"
                  aria-hidden={true}
                  onClick={toggle_password}
                ></i>
              </div>
              <div className="forgot-password">
                <Link to="forgot-password">Forgot your password?</Link>
              </div>

              <div>
                <button
                  className="submit-btn btn-secondary"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
                <button
                  className="google-btn"
                  disabled={loading ? true : false}
                >
                  <img src={google_logo} alt="" />
                  Continue with google
                </button>
              </div>

              <div className="sign-in">
                <Link to="/signup">
                  New to farmruby?
                  <span> SIGN UP</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
