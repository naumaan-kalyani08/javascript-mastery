import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-white text-black py-4 px-8 flex justify-between items-center shadow-md rounded-b-2xl">
      <div className="">
        <span> Logo</span>
      </div>
      <div className="header-links">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/conditional-concept">
          Conditional concept
        </Link>
        <Link className="" to="/loops">
          Loop Concepts
        </Link>
        <Link className="" to="/custom-loops">
          Custom Loops
        </Link>
        <Link className="" to="/array">
          Array Concept
        </Link>
        <Link className="" to="/real-examples">
          Real exmples
        </Link>
      </div>
    </div>
  );
};

export default Header;
