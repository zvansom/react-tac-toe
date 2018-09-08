import React from 'react'
import Reset from './Reset'

const GameOver = props => (
  <div className="Display">
    <h2>No Moves Left!</h2>
    <Reset handleReset={props.handleReset} />
  </div>
)

export default GameOver;