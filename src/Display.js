import React from 'react'

const Display = props => (
  <div className="Display">
    {props.turn ? (
      <h2>Player 1's Turn!</h2>
    ) : (
      <h2>Player 2's Turn!</h2>
    )}
  </div>
)

export default Display;