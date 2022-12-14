import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="container">
      <div className="sign_up">
        <div>
          <h5>Sign-Up and start learning.</h5>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="full_name"
              aria-describedby="emailHelp"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Send me special offers, personalised recommendations, and learning
              tips.
            </label>
          </div>
          <div className="button">
            <button id="sign_up_btn" type="submit" className="btn btn-primary">
              Sign-Up
            </button>
          </div>
          <p>
            By signing up, you agree to our <u>Terms of Use</u> and{" "}
            <u> Privacy Policy.</u>
          </p>
          <hr />
          <span className="acc">
            Already have an account?
            <NavLink className="color" to="/login">
              Log In
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}
