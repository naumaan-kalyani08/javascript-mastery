import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/conditional-concept">Conditional concept</Link>
    </div>
  );
};

export default Header;
