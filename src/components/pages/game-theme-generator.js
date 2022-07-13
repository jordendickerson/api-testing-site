import React, { Component } from 'react';

import GameThemeLists from '../API components/game-theme-lists';

class GameThemeGenerator extends Component {
    render() {
        return (
            <div>
                <div className="game-generator-wrapper">
                    <div className="title">Game Jam Theme Generator</div>
                    <GameThemeLists />
                </div>
            </div>
        );
    }
}

export default GameThemeGenerator;
