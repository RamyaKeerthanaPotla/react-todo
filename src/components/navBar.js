import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/enterdetails">
        Enter Details
      </Link>
      <Link className="navbar-brand" to="/todo">
        Todo
      </Link>
      <Link className="navbar-brand" to="/myprofile">
        My Profile
      </Link>
      <Link className="navbar-brand" to="/login">
        Login
      </Link>
    </nav>
  );
};
