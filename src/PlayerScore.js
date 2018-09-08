import React from 'react';

const PlayerScore = props => (
  <div>
    <h2>{props.name}</h2>
    <h2>{props.score}</h2>
  </div>
)

export default PlayerScore;