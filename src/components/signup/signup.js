import React, { useState, useContext } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import google_logo from "../../assets/google.svg";
import logo from "../../assets/farmruby.png";
import axios from "axios";
import { SERVER_URL, SET_LOADING, SET_MESSAGE } from "../../helpers/constant";
import store from "../../store/store";
import history from "../../utility/history";

function Signup() {
  const { state, dispatch } = useContext(store);
  const { loading, message } = state;
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [accept_condition, setAccept_conditon] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "name":
        setFull_name(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "check":
        setAccept_conditon(!accept_condition);
        break;
      default:
        setPassword(e.target.value);
    }
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accept_condition) {
      dispatch({
        type: SET_MESSAGE,
        payload: " Accept conditions before proceeding",
      });
      setTimeout(function () {
        dispatch({
          type: SET_MESSAGE,
          payload: "",
        });
      }, 5000);
      return;
    } else {
      dispatch({ type: SET_LOADING, payload: true });

      const url = SERVER_URL + "/signup";
      const data = { fullName: full_name, email, password };
      console.log(data);
      axios
        .post(url, data)
        .then((res) => {
          alert("Accounted created successfully, please login to continue");
          dispatch({ type: SET_LOADING, payload: false });
          setTimeout(function () {
            history.push("/login");
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: SET_LOADING, payload: false });
        });
    }
  };

  //toggle show password
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
    <div className="signup">
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
                  <Link to="login">Sign in</Link>
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
                <label htmlFor="name">Full name</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={full_name}
                  onChange={handleChange}
                  required
                />
              </div>
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

              <div className="check">
                <div>
                  <input
                    type="checkbox"
                    name="check"
                    onChange={handleChange}
                    value={accept_condition}
                  />
                </div>
                <div>
                  <p>
                    By creating an account, you agree to our terms and
                    conditions, privacy and returns policies
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="submit-btn btn-secondary"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading..." : "Create my account"}
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
                <Link to="/login">
                  Already have an account?
                  <span> SIGN IN</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
