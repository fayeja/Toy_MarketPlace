import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allDoll">Dolls</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/myDoll">My Dolls</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar lg:px-10 font-medium text-white bg-gradient-to-r from-rose-300 to-sky-300">
        <div className="navbar-start mx-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 lg:p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <img
              className="w-14 rounded-3xl"
              src="https://i.ibb.co/R7T9yTN/logo.jpg"
              alt=""
            />
            <h6 className="lg:text-3xl mt-3 font-bold font-serif">Monarch</h6>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end lg:flex">
          <div>
            {user && (
              <div
                className="relative invisible  md:invisible lg:visible  border-4 rounded-full w-2/12 ml-56"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                <img className="rounded-full" src={user?.photoURL} alt="" />
                {isHovered && (
                  <div className="absolute indicator bottom-0 top-18 left-16 text-white">
                    <span className="font-bold p-2 indicator-item items-center bg-pink-500 rounded-full">
                      {user?.displayName}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            {user ? (
              <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
                <Link onClick={handleLogout}>Logout</Link>
              </button>
            ) : (
              <button className="text-white btn btn-outline bg-pink-500 rounded-3xl">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
