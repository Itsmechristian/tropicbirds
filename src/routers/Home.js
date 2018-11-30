import React, { Component } from "react";

// Components
import PreLoader from '../common/preload/PreLoader.js';

class Home extends Component {

  render() {
        return (
            <div className="home">
              <PreLoader id="home-header" highQuality='https://res.cloudinary.com/sijey/image/upload/c_scale,fl_lossy/v1543433738/tropicbirds/pexels-photo-1599452.jpg' />
              {/* <section>
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
                      <img src='https://res.cloudinary.com/sijey/image/upload/q_auto/v1543422414/tropicbirds/macaweating.jpg' alt="macaw-eating"/>
                      <img src='https://res.cloudinary.com/sijey/image/upload/q_auto/v1543422415/tropicbirds/macaw-animal.jpg' alt="macaw-animal"/>
                  </div>
                </div>
              </section> */}
            </div>
    );
  }
}

export default Home;
