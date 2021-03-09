import React from 'react';
import './Button.css';

function Button({
  mode,
  text,
  handleClick, 
  children})
{
  return (
    <button className={`button ${mode}`} onClick={handleClick}>
      {text}{children}
    </button>
  )
}

export default Button;