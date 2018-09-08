import React, { Component } from 'react';
import './App.css';

import MessageCenter from './MessageCenter';
import Board from './Board';

export default class Game extends Component {
  state = {
    p1Active: true,
  }

  handleClick = event => (
    this.setState({
      p1Active: !this.state.p1Active
    })
  );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Tac-Toe</h1>
        </header>
        <MessageCenter turn={this.state.p1Active} />
        <Board handleClick={this.handleClick} />
      </div>
    );
  }
}
