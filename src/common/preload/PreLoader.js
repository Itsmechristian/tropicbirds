import React, { Component } from "react";
import "./PreLoader.css";

class PreLoader extends Component {

  state = {
    preloaderChildren: ''
  }

  preloadRef = React.createRef();
  imgRef = React.createRef();

  componentDidMount() {
    let hdLoader = new Image();
    let currentRef = this.preloadRef.current

    hdLoader.src = this.props.highQuality;

    hdLoader.onload = () => {
      // Once image loaded add image in the loaded class elemenet
      currentRef.style.backgroundImage = `url(${this.props.highQuality})`;
      // Removing loaded class in preloader
      currentRef.classList.remove("preload");
      // Adding loaded class in preloader
      currentRef.classList.add("loaded");
      // Removing ballJumping
      this.imgRef.current.remove();
      // Adding children when image loads
      this.setState({ preloaderChildren: this.props.children })
    };
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={[this.props.className, "preload"].join(" ")}
        style={this.props.style}
        ref={this.preloadRef}
      >
        <img src='https://res.cloudinary.com/sijey/image/upload/v1543422413/tropicbirds/ball-jumping.svg' alt="ball-jumping" ref={this.imgRef} />
        {this.state.preloaderChildren}
      </div>
    );
  }
}

export default PreLoader;
