import React, { Component } from "react";

// Components
import HamburgerMenu from './HamburgerMenu.js';
import WebMenu from './WebMenu.js'

import './Navbar.css'


class Navbar extends Component {
  constructor() {
    super();

    
    this.state = {
        // By default get the window width onload
        windowWidth: window.innerWidth,
        isClick: false
    };

    this.resizeHandler = this.resizeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this)

  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);

  }

  resizeHandler() {
    /**
     * When client resize the screen it'll automically update their
     * width to know what design we should use in the current width.
     */
    this.setState({
      windowWidth: window.innerWidth,
      isClick: false
    });
  }

  clickHandler(isClick) {
    this.setState({
      isClick: isClick
    })
  }

  render() {
    return (
      <nav>
        <div className="container" style={{backgroundColor: this.state.isClick ? '#000' : 'rgba(10, 9, 9, 0.459)', transition: 'all .2s'}}>
          <div className="left">
            <img
              src="https://res.cloudinary.com/sijey/image/upload/fl_lossy/v1543422414/tropicbirds/icons.png"
              alt="icon"
              className="logo"
              height="40px"
            />
          </div>
          <div className="right">
            {this.state.windowWidth < 576 ? <HamburgerMenu onClick={this.clickHandler} isClick={this.state.isClick} /> : <WebMenu />}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
