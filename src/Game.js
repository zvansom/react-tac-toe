import React, { Component } from 'react';
import './App.css';

import MessageCenter from './MessageCenter';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Tac-Toe</h1>
        </header>
        <MessageCenter />
        <Board />
      </div>
    );
  }
}

export default Game;
