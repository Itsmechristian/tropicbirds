import React from "react";
import { Link } from "react-router-dom";

export const HamburgerItems = () => {
  return (
    <div className="items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Visit Us</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
