import React, { Component } from "react";
import { Link } from "react-router-dom";

class HamburgerMenu extends Component {
  constructor() {
    super();

    this.state = {
      isClick: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      isClick: this.state.isClick ? false : true
    });

    setTimeout(() => {
      this.props.onClick(this.state.isClick);
    });
  }

  render() {
    return (
      <div className="hamburger-menu">
        <div className="hamburger" onClick={this.handleOnClick}>
          <span />
          <span />
          <span />
        </div>
        <div className={["items", this.state.isClick ? "show" : "hidden"].join(" ")}>
          <ul>
            <li>
              <Link to="/" onClick={this.handleOnClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/visit-us" onClick={this.handleOnClick}>Visit Us</Link>
            </li>
            <li>
              <Link to="/" onClick={this.handleOnClick}>Services</Link>
            </li>
            <li>
              <Link to="/" onClick={this.handleOnClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
