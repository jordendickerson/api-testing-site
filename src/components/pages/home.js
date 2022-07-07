import React, { Component } from "react";
import axios from "axios";

import whiteboardImage from "../../../static/assets/images/home/api-whiteboard.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adviceId: "",
      advice: "",
    };

    this.getAdvice = this.getAdvice.bind(this);
  }

  getAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log("response from quote generator", response);
        this.setState({
          adviceId: response.data.slip.id,
          advice: response.data.slip.advice,
        });
      })
      .catch((error) => {
        console.log("Error from quote generator", error);
      });
  }

  componentDidMount() {
    this.getAdvice();
  }

  render() {
    return (
      <div>
        <div
          className="home-image"
          style={{
            backgroundImage: `url(${whiteboardImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="home-image-content">
            <div className="home-image-text">
              A website for testing APIs.
            </div>
          </div>
        
        <div className="advice-section">
          <div className="title-description-wrapper">
            <div className="title">RANDOM ADVICE GENERATOR</div>
            <div className="description">
              Randomly generated advice using the <a href="https://api.adviceslip.com/" target="_blank">Advice Slip API</a>.
            </div>
            <div className="warning">
              *Wait 2 seconds between advice generations.
            </div>
          </div>
          <div className="advice-wrapper">
            <div className="advice">
              <span className="advice-label">Advice #{this.state.adviceId}:</span> {this.state.advice}
            </div>
          </div>
          <div className="advice-generator-button">
            <button onClick={this.getAdvice}>Generate New Advice</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
