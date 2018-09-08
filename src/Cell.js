import React from 'react';

const Cell = props => (
  <div className="Cell">
    {!props.owner ? (
      <button 
        value={props.value} 
        onClick={props.handleClick}
        owner={props.owner}></button>
    ) : (
      <div className={`Marker-${props.owner}`}></div>
    )}
  </div>
)

export default Cell;