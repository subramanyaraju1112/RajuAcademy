import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

export default function SignUp() {
  return (
    <div className="container">
      <div className="login">
        <div>
          <h5>Log In to your Raju Academy!</h5>
          <hr />
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email_logIn"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password_logIn"
              placeholder="Password"
            />
          </div>
          <div className="button">
            <button type="submit" id="log_in" className="btn btn-primary">
              Log In
            </button>
          </div>
          <div className="forgot-password">
            <p className="FP">
              or <u className="color">Forgot Password</u>
            </p>
          </div>
          <hr />
          <span className="acc">
            Don't have an account?
            <NavLink to="/sign-up" className="sign-up">
              Sign-Up
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
