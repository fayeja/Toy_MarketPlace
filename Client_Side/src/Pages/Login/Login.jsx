import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import Usetitle from "../../Hooks/Usetitle";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  Usetitle("Login");

  const from = location.state?.from?.pathname || "/";

  Swal.fire({
    title: "Warning!",
    text: "You are logging first then Go to the next page!",
    icon: "warning",
    confirmButtonText: "Ok",
  });
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");
        navigate(from, { replace: true });
        Swal.fire({
          title: "Success!",
          text: "You are logging in successfully!!!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signIn(email, password)
      .then((result) => {
        form.reset();
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");
        Swal.fire({
          title: "Success!",
          text: "You are logging in successfully!!!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        form.reset();
        console.log(err.message);
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: "Oops! Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
        setSuccess("");
      });
  };
  return (
    <div className="hero border-4 min-h-full bg-gradient-to-r from-rose-300 to-sky-300">
      <div className="hero-content flex-col lg:flex-row p-14">
        <div className="text-center lg:text-left ">
          <img
            className="w-9/12 rounded-full mt-5"
            src="https://i.pinimg.com/originals/df/ea/dd/dfeaddf703acf71277dbb1d6d81479b0.gif"
            alt=""
          />
        </div>
        <div className="card mt-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="text-white btn btn-outline bg-pink-500 rounded-3xl normal-case"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="space-y-2 text-center font-bold">
              <p>Or,</p>
              <button
                onClick={handleGoogleSignIn}
                className="text-white w-12 btn btn-outline bg-pink-500 rounded-3xl"
              >
                <FaGoogle></FaGoogle>
              </button>
              <p>
                New to Monarch??
                <Link to="/signup" className="text-rose-800 font-bold">
                  Sign Up
                </Link>
              </p>
              <p className="text-success">{success}</p>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
