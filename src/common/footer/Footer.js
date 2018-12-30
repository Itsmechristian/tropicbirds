import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="left">
            <h1>Contact Us</h1>
            <form action="#">
              <input type="text" placeholder="Name:" />
              <input type="number" placeholder="Phone:" />
              <input type="email" placeholder="Email:" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message:"
              />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="right">
            <div className="logo">
              <img src="asdad" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
