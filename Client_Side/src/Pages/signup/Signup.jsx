import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Usetitle from "../../Hooks/Usetitle";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  Usetitle("Sign Up");

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setSuccess("User created successfully");
        Swal.fire({
          title: "Success!",
          text: "You are logging in successfully!!!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        form.reset();
        updateUserdata(res.user, name, photo);
        navigate(from, { replace: true });
        Swal.fire({
          title: "Success!",
          text: "You are logging in successfully!!!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        form.reset();
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: "Oops! Something went wrong!Do you want to continue?",
          icon: "error",
          confirmButtonText: "Cool",
          width: 350,
          padding: "1em",
          color: "#716add",
          background: "rgba(255, 255, 255,0.7)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://i.giphy.com/media/qo4T3YNcaT2IMGZ8tY/giphy.webp") 
            left top
            no-repeat
          `,
        });
      });
    const updateUserdata = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("user profile updated");
        })
        .catch((err) => {
          setError(err.message);
        });
    };
  };

  return (
    <div className="hero border-4 min-h-full bg-gradient-to-r from-rose-300 to-sky-300">
      <div className="hero-content flex-col lg:flex-row p-1 mb-4">
        <div className="text-center lg:text-left ">
          <img
            className="w-9/12 rounded-full mt-5"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif"
            alt=""
          />
        </div>
        <div className="card mt-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Please Sign Up!</h1>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="label mt-2">
                  <div className="flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 mr-2 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "
                    />
                    <p>Accept Terms and Conditions</p>
                  </div>
                </label>
              </div>
              <div className="form-control mt-3">
                <input
                  className="text-white btn btn-outline bg-pink-500 rounded-3xl normal-case"
                  type="submit"
                  value="Sign Up"
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
                Already have an account??
                <Link to="/login" className="text-rose-800 font-bold">
                  Login
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

export default Signup;
