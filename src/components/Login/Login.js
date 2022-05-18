import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // this is for email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // this is for password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // this is for form submit
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user || guser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className=" my-2">
        <div className="row p-5">
          <div className="col-md-4"></div>
          <div className="col-12 col-md-4 p-5 login px-5">
            <form onSubmit={handleUserSignIn}>
              <h3 className="text-center">Login</h3>
              <div className="col-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  onBlur={handleEmail}
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
                  onBlur={handlePassword}
                  required
                />
              </div>
              <p className="mt-2 text-danger">{error?.message}</p>
              {loading && <p className="text-success">Loading...</p>}
              <div className="col-12 col-md-6 mx-auto mt-4">
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-2">
              New to Ema-john?
              <Link className="ms-1 signup-link" to="/signup">
                Create New Account
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

export default Login;
