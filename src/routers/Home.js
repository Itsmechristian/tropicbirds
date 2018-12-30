import React, { Component } from "react";
import "./Routers.css";
import { Image } from 'cloudinary-react';

// Components
import PreLoader from "../common/preload/PreLoader";
import Popularbirds from "../common/popularbirds/Popularbirds";
import Footer from "../common/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="header">
          <PreLoader
            id="header-image"
            highQuality="https://res.cloudinary.com/sijey/image/upload/c_scale,fl_lossy/v1543433738/tropicbirds/pexels-photo-1599452.jpg"
          />
        </section>
        <section className="one">
          <div className="container">
            <div className="left">
              <h1 className="title">Welcome</h1>
              <h3 className="subtitle">Help us to protect tropical birds.</h3>
              <p>
                Experts say that up to 900 species of tropical land birds around
                the world could possibly become extinct by 2100 because of
                global warming. Learn more about these beautiful birds and find
                out more about how we can help ensure the future of our planet
                and all of its wonderful creatures!
              </p>
            </div>
            <div className="right">
              <img
                id="first"
                src="https://res.cloudinary.com/sijey/image/upload/q_auto,fl_lossy,c_scale/v1543422414/tropicbirds/macaweating.jpg"
                alt="macaw-eating"
              />
                <Image cloudName="demo" publicId="sample" width="300" crop="scale"/>
            </div>
          </div>
        </section>
        <section className="two">
          <div className="container">
            <Popularbirds />
          </div>
        </section>
        <section className="three">
          <div className="container">
            <div className="text">
              <h1 className="title">Save the birds!</h1>
              <p>
                The <b>Wildlife Conservation Society</b> works to conserve birds
                and their natural habitats all around the world from Alaska to
                Indonesia and the tropical rainforests in Brazil. Birds are a
                diverse bunch and they are the first species to suffer when{" "}
                <b>climate change</b> or pollution take hold in an ecosystem.
                Learn more about the beautiful birds populating our planet (many
                of whom are endangered) and spread the word at{" "}
                <a href="http://www.wcs.org" style={{ color: "#014BB8" }}>
                  {" "}
                  www.wcs.org!
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default Home;
