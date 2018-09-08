import React from 'react';

const Cell = props => (
  <div className="Cell">
    <button value={props.value} onClick={props.handleClick}></button>
  </div>
)

export default Cell;