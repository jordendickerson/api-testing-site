import React, { Component } from "react";
import axios from "axios";

class WordGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: "word",
      currentDefinition: "definition"
    };

    this.getWord = this.getWord.bind(this);
  }

//   {data: Array(1), status: 200, statusText: '', headers: {…}, config: {…}, …}
//   config: {url: 'https://random-words-api.vercel.app/word', method: 'get', headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
//   data: Array(1)
//   0: {word: 'Yardarm', definition: 'Either end of the yard of a square-rigged ship  ', pronunciation: 'Yartarm'}

  getWord() {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((response) => {
        console.log("Response from word generator",response);
        this.setState({
            currentWord: response.data[0].word,
            currentDefinition: response.data[0].definition,
        });
      })
      .catch((error) => {
        console.log("Error from getWord word-generator",error);
      });
  }

  render() {
    return (
      <div>
        <div className="word-generator-wrapper">
          <div className="title">WORD GENERATOR</div>
          <div className="content">
            <div className="word-wrapper">
                <div className="word">{this.state.currentWord}-</div>
                <div className="definition">{this.state.currentDefinition}</div>
            </div>
            <div className="word-generator-button">
              <button onClick={this.getWord}>Generate Word</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WordGenerator;
