import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { auth } from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // this is for create user email and pass
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  //this is for google
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  // this is for email
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  // this is for password
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // this is for password
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setError("Your password didn't match..!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
      setError("");
    }
  };

  // if user can find then go to landing page by using useNavigat
  if (user || guser) {
    navigate("/");
  }

  return (
    <div>
      <div className="signUp-form py-2">
        <div className="row p-5">
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-12 col-md-4 p-4 sign-up px-5">
            <form onSubmit={handleCreateUser}>
              <h3 className="text-center">Sign Up</h3>
              <div className="col-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  onBlur={handlePasswordBlur}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label for="inputPassword4" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  onBlur={handleConfirmPasswordBlur}
                  required
                />
              </div>
              <p className="text-danger mt-2">{error}</p>
              <div className="col-12 col-md-6 mx-auto mt-4">
                <button type="submit" className="btn btn-danger">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-2">
              Already have an account?
              <Link className="ms-1 login-link" to="/login">
                Login
              </Link>
            </p>
            <div className="d-flex justify-content-center px-5">
              <hr className="w-50" /> <p className="px-2">or</p>
              <hr className="w-50" />
            </div>
            <div className="text-center w-100">
              <button className="btn" onClick={() => signInWithGoogle()}>
                Continue with Google
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
