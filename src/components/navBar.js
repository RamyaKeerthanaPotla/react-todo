import React from "react";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="./enterdetails">
        Enter Details
      </a>
      <a className="navbar-brand" href="./todo">
        Todo
      </a>
      <a className="navbar-brand" href="./myprofile">
        My Profile
      </a>
      <a className="navbar-brand" href="./login">
        Login
      </a>
    </nav>
  );
};
