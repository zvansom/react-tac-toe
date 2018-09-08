import React from 'react'

const GameOver = props => (
  <div className="Display">
    <h2>{props.message}</h2>
    <button className="button" onClick={props.handleReset}>Play again!</button>
  </div>
)

export default GameOver;