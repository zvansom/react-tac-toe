import React, { Component } from 'react';
import Player from './Player';
import Display from './Display';
export default class MessageCenter extends Component { 
  render() {
    return (
      <div className="Message">
        <Player />
        <Display turn={this.props.turn} />
        <Player />
      </div>
    )
  }
}