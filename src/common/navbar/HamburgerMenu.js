import React, { Component } from "react";

import { HamburgerItems } from "./HamburgerItems.js";

class HamburgerMenu extends Component {
  constructor() {
    super();

    this.state = {
      isClick: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //     isClick: this.state.isClick ? false : true
    //   });


  }
  
  handleOnClick() {
    this.setState({
        isClick: this.state.isClick ? false : true
    });
    
    setTimeout(() => {
        this.props.onClick(this.state.isClick)
    })
  }

  render() {
    return (
      <div className="hamburger-menu">
        <div className="hamburger" onClick={this.handleOnClick}>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
