import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full mx-auto px-10">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Espresso
        </Link>
      </div>
      <div className="flex-none gap-5">
        <Link to={"/addcoffee"}>Add Coffee</Link>
        <Link to={"/users"}>User</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
