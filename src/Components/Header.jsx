import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/conditional-concept">Conditional concept</Link>
      <Link to="loops">Loop Concepts </Link>
    </div>
  );
};

export default Header;
