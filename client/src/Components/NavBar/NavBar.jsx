import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-blue950 text-white  flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <div>
          <img src="/logo.png" alt="imageStore" className="ml-4" style={{ maxWidth: "60px" }} />
        </div>
        <span className="ml-2 ">ApiCommerce</span>
      </Link>
    </div>
  );
};
