import React, { Component } from 'react';

// Import Components
import PlayerScore from './PlayerScore';
import PlayerTurn from './PlayerTurn';
import GameOver from './GameOver';

export default class MessageCenter extends Component { 
  render() {
    const { turn, movesLeft, handleReset, scores } = this.props;
    let display;

    if ( !movesLeft ) { display = <GameOver handleReset={handleReset} /> } 
    else { display = <PlayerTurn turn={turn} /> }

    return (
      <div className="Message">
        <PlayerScore name="P1" score={scores.player1} />
        {display}
        <PlayerScore name="P2" score={scores.player2} />
      </div>
    )
  }
}