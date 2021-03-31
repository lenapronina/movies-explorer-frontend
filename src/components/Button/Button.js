import React from 'react';
import './Button.css';

function Button({
  mode,
  text,
  handleClick,
  children,
  isDisabled = false,
})
{
 
  return (
    <button className={`button ${mode} ${isDisabled &&'button_color_disabled'}`} disabled={isDisabled} onClick={handleClick}>
      {text}{children}
    </button>
  )
}

export default Button;