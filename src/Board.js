import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
  render() {
    const { cells, handleClick } = this.props;
    return (
      <div className="Board">
      {cells.map(cell => 
        <Cell 
          key={cell.value}
          value={cell.value}
          owner={cell.owner}
          handleClick={handleClick}
        />
      )}
      </div>
    )
  }
}