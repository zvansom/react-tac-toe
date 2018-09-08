import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {

  render() {
    return (
      <div className="Board">
        <Cell handleClick={this.props.handleClick} value="0" />
        <Cell handleClick={this.props.handleClick} value="1" />
        <Cell handleClick={this.props.handleClick} value="2" />
        <Cell handleClick={this.props.handleClick} value="3" />
        <Cell handleClick={this.props.handleClick} value="4" />
        <Cell handleClick={this.props.handleClick} value="5" />
        <Cell handleClick={this.props.handleClick} value="6" />
        <Cell handleClick={this.props.handleClick} value="7" />
        <Cell handleClick={this.props.handleClick} value="8" />
      </div>
    )
  }
}