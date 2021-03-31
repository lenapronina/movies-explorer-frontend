import React from 'react';
import './MoreButton.css';

function MoreButton({handleClick}) {
  return(
    <button 
      className="more-button"
      onClick={handleClick}
    >Ещё</button>
  )
}

export default MoreButton;