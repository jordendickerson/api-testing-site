import React, { Component } from 'react';
import axios from 'axios';

class GameThemeLists extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameTheme: ""
        }

        this.randomNumber = this.randomNumber.bind(this);
        this.generateTheme = this.generateTheme.bind(this);
    }
    

    randomNumber(maxNumber){
        return Math.round(Math.random()*maxNumber)
    }

    generateTheme(){
        
    }

    componentDidMount(){
    
    }

    render() {
        return (
            <div>
                <button onClick={this.generateTheme}>GENERATE THEME</button>
            </div>
        );
    }
}

export default GameThemeLists;

