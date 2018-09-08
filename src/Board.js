import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {

  render() {
    const { handleClick } = this.props
    return (
      <div className="Board">
        <Cell handleClick={handleClick} value="0" />
        <Cell handleClick={handleClick} value="1" />
        <Cell handleClick={handleClick} value="2" />
        <Cell handleClick={handleClick} value="3" />
        <Cell handleClick={handleClick} value="4" />
        <Cell handleClick={handleClick} value="5" />
        <Cell handleClick={handleClick} value="6" />
        <Cell handleClick={handleClick} value="7" />
        <Cell handleClick={handleClick} value="8" />
      </div>
    )
  }
}