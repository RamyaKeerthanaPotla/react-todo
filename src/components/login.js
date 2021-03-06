import React from "react";
import "./styles.css";

export const Login = () => {
  return (
    <form className=" profile-form">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control col-sm-4"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control col-sm-4"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary button-styles">
        Login
      </button>
    </form>
  );
};
