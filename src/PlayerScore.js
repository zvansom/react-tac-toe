import React from 'react';

const PlayerScore = props => (
  <div >
    <h2 className="title">{props.name}</h2>
    <h2 className={`score ${props.name}`}>{props.score}</h2>
  </div>
)

export default PlayerScore;