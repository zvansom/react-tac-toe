import React, { Component } from 'react';
import './App.css';

import checkForWin from './checkForWin';

// Components
import MessageCenter from './MessageCenter';
import Board from './Board';

export default class Game extends Component {
  state = {
    board: [
      {value: 0, owner: '',},
      {value: 1, owner: '',}, 
      {value: 2, owner: '',},
      {value: 3, owner: '',},
      {value: 4, owner: '',},
      {value: 5, owner: '',},
      {value: 6, owner: '',},
      {value: 7, owner: '',},
      {value: 8, owner: '',}
    ],
    p1Active: true,
    movesLeft: 9,
    win: false,
    scores: {
      player1: 0,
      player2: 0,
    },
  }

  handleReset = () => {
    this.setState({
      board: [
        {value: 0, owner: '',},
        {value: 1, owner: '',}, 
        {value: 2, owner: '',},
        {value: 3, owner: '',},
        {value: 4, owner: '',},
        {value: 5, owner: '',},
        {value: 6, owner: '',},
        {value: 7, owner: '',},
        {value: 8, owner: '',}
      ],
      p1Active: true,
      movesLeft: 9,
      win: false,
    })
  };

  handleClick = event => {
    const board = this.state.board;
    // If p1Active, set marker to X else set marker to O
    board[event.target.value].owner = this.state.p1Active ? 'X' : 'O'; 
    this.setState({ 
      board,
      p1Active: !this.state.p1Active,
      movesLeft: this.state.movesLeft - 1,
    });
    if (checkForWin(board)) {
      let scores = this.state.scores;
      this.state.p1Active ? scores.player1 += 1 : scores.player2 += 1;
      
      this.setState({
        scores,
        win: true,
        movesLeft: 0,
      })
    }
  };

  render() {
    const { board, p1Active, movesLeft, scores } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Tac-Toe</h1>
        </header>
        <MessageCenter 
          turn={p1Active} 
          movesLeft={movesLeft} 
          handleReset={this.handleReset}
          scores={scores}
        />
        <Board 
          cells={board} 
          handleClick={this.handleClick} 
        />
      </div>
    );
  }
}
