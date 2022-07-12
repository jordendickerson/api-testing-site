import React, { Component } from "react";

import AdviceGenerator from "../API components/advice-generator";
import WordGenerator from "../API components/word-generator";

import whiteboardImage from "../../../static/assets/images/home/api-whiteboard.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div
            className="home-image"
            style={{
              backgroundImage: `url(${whiteboardImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="home-image-content">
              <div className="home-image-text">A website for testing APIs.</div>
            </div>
          </div>
        </div>
        <AdviceGenerator />
        <WordGenerator />
      </div>
    );
  }
}

export default Home;
