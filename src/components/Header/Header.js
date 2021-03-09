import React from 'react';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ 
  pathName,
  loggedIn,
  mobileMenu,
  clickMenu,
  signIn,
  signUp,
  goMovies,
  goProfile,
  goLanding,
  goSavedMovies 
}) {

  const openAsideMenu = () => {
    clickMenu();
  }

  return (
    loggedIn ? (
      <header className="header header_type_profile">
        <div className="header__content">
          <button className="header__link" onClick={goLanding}><img className="header__logo" src={headerLogo} alt="Логотип сервиса" /></button>
           <Navigation
              signIn={signIn}
              signUp={signUp}
              loggedIn={loggedIn}
              mobileMenu={mobileMenu}
           />
        </div>
      </header> 
     ) : ( mobileMenu ? (
      <header className="header">
      <div className="header__content">
        <button className="header__link" onClick={goLanding}><img className="header__logo" src={headerLogo} alt="Логотип сервиса" /></button>
        <button onClick={openAsideMenu} className="header__burger-button"></button>
      </div>
    </header>
     ) : (
      <header className="header">
      <div className="header__content">
        <button className="header__link" onClick={goLanding}><img className="header__logo" src={headerLogo} alt="Логотип сервиса" /></button>
         <Navigation
            signIn={signIn}
            signUp={signUp}
            path={pathName}
            goMovies={goMovies}
            goProfile={goProfile}
            goSavedMovies={goSavedMovies}
            mobileMenu={mobileMenu}
         />
      </div>
      </header> 

     )

     
    )
   
  )
}

export default Header;


//  header_type_profile


