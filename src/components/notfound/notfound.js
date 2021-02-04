import React from "react";
import './notfound.css';
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="NotFound-title">Oops! Page not found</h1>
      <Link to="/" className="NotFound-Link"> Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
