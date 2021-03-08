import React from 'react';
import './SignHeader.css';
import headerLogo from '../../images/header-logo.svg'

function SignHeader({headerText}) {
  return(
    <header className="sign-header">
      <img className="header__logo" src={headerLogo} alt="Логотип сервиса" />
      <h1 className="sign-header__heading">{headerText}</h1>
    </header>
  )
}

export default SignHeader;