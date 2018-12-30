import React, { Component } from "react";
import { Link } from "react-router-dom";

class WebMenu extends Component {
  render() {
    return (
      <div className="web-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/visit-us">Visit Us</Link>
          </li>
          <li>
           <Link to="/">Services</Link>
          </li>
          <li>
           <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default WebMenu;
