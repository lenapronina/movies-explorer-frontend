import React from 'react';
import './SignHeader.css';
import headerLogo from '../../images/header-logo.svg'

function SignHeader({handleLogo, headerText}) {
  return(
    <header className="sign-header">
      <button className="header__link" onClick={handleLogo}>
        <img className="header__logo" src={headerLogo} alt="Логотип сервиса" />
      </button>
      <h1 className="sign-header__heading">{headerText}</h1>
    </header>
  )
}

export default SignHeader;