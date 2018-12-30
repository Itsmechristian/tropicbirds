import React, { Component } from "react";
import { fetch } from "whatwg-fetch";
import "./Popularbirds.css";

class Popularbirds extends Component {
  state = {
    popularbirds: []
  };

  componentDidMount() {
    let url = "http://localhost:1997/api/popularbirds";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ popularbirds: data });
      });
  }

  render() {
    let { popularbirds } = this.state;

    if (popularbirds) {
      return (
        <div className="popularbirds">
          <h1 className="title">Popular tropical birds</h1>
          {popularbirds.map(birdData => (
              /**
               * @param birdData.birdName Bird Names
               */
              <div className="birds" key={birdData.id}>
              <div className="text">
                <h3 className="subtitle">{birdData.birdName}</h3>
                <div
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: birdData.htmlString }}
                />
                <div className="images">
                  {birdData.images.map(image => (
                    <img key={image.id} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Popularbirds;
