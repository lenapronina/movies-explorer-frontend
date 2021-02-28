import React from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({mobileMenu, clickMenu}){

  const clickClick = () => {
    clickMenu()
  }
  
  return (
    mobileMenu ? (
      <>
        <header className="header">
        <div className="header__content">
          <img className="header__logo" src={headerLogo} alt="Логотип сервиса"/>
          <button onClick={clickClick} className="header__burger-button"></button>
        </div>
        </header>
      </>) : (
      <header className="header">
      <div className="header__content">
        <img className="header__logo" src={headerLogo} alt="Логотип сервиса"/>
        <Navigation />
      </div>
    </header>
    )
  )
}

export default Header;


//  header_type_profile