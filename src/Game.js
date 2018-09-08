import React, { Component } from 'react';
import './App.css';

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
  }

  handleClick = event => {
    const board = this.state.board;
    // If p1Active display X marker else display O marker
    board[event.target.value].owner = this.state.p1Active ? 'X' : 'O'; 
    this.setState({ 
      board,
      p1Active: !this.state.p1Active,
      movesRemaining: this.state.movesRemaining - 1,
    });
  };

  render() {
    const { board, p1Active } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Tac-Toe</h1>
        </header>
        <MessageCenter turn={p1Active} />
        <Board cells={board} handleClick={this.handleClick} />
      </div>
    );
  }
}
