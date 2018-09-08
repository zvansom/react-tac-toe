import React, { Component } from 'react';

// Import Components
import Player from './Player';
import PlayerTurn from './PlayerTurn';
import GameOver from './GameOver';

export default class MessageCenter extends Component { 
  render() {
    const { turn, movesLeft, handleReset } = this.props;
    let display;

    if ( !movesLeft ) { display = <GameOver handleReset={handleReset} /> } 
    else { display = <PlayerTurn turn={turn} /> }

    return (
      <div className="Message">
        <Player />
        {display}
        <Player />
      </div>
    )
  }
}