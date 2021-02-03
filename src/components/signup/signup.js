import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import google_logo from "../../assets/google.svg";
import logo from "../../assets/farmruby.png";

function Signup(props) {
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
                <h1>Reengineering the fresh farm produce.</h1>{" "}
              </div>
              <div>
                <button className="btn">Sign up</button>
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
        <div className="get-started">
          <h3>Hello, Get started</h3>
          <p>Join over 200,000 customers from around Nigeria</p>
        </div>
        <div className="form">
          <form>
            <div className="input-group">
              <label htmlFor="full-name">Full name</label> <br />
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name"
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
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <i className="fa fa-eye" aria-hidden="true"></i>
            </div>
            <div className="forgot-password">
              <Link to="forgot-password">Forgot your password?</Link>
            </div>
            <div className="check">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>
                  By creating an account, you agree to our terms and conditions,
                  privacy and returns policies
                </p>
              </div>
            </div>
            <div>
              <button className="submit-btn" type="submit">
                Create my account
              </button>
              <button className="google-btn">
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
  );
}

export default Signup;
