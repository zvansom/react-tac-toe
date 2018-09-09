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
    if (!this.state.win) {
      const board = this.state.board;
      board[event.target.value].owner = this.state.p1Active ? 'X' : 'O'; 
      this.setState({ 
        board,
        p1Active: !this.state.p1Active,
        movesLeft: this.state.movesLeft - 1,
      });
      if (checkForWin(board)) {
        let { scores, p1Active } = this.state;
        p1Active ? scores.player1 += 1 : scores.player2 += 1;
        this.setState({
          scores,
          win: true,
        })
      }
    }
  };

  render() {
    const { board, p1Active, movesLeft, scores, win } = this.state;
    return (
      <div className="App">
        <MessageCenter 
          turn={p1Active} 
          movesLeft={movesLeft} 
          handleReset={this.handleReset}
          scores={scores}
          win={win}
        />
        <Board 
          cells={board} 
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
