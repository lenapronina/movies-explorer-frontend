import React from 'react';
import Navigation from '../Navigation/Navigation';
import './AsideMenu.css';

function AsideMenu({
  isOpen,
  loggedIn,
  mobileMenu,
  closeMenu,
  signIn,
  signUp,
  pathName,
  goMovies,
  goProfile,
  goSavedMovies
}) {

  const menuOpened = isOpen ? ' aside_opened' : '';

  return(
    <aside className={`aside ${menuOpened}`}>
      <div className="aside__menu">
        <button className="aside__close-button" onClick={closeMenu}></button>
        <Navigation
          signIn={signIn}
          signUp={signUp}
          path={pathName}
          loggedIn={loggedIn}
          goMovies={goMovies}
          goProfile={goProfile}
          goSavedMovies={goSavedMovies}
          mobileMenu={mobileMenu}
        />
      </div>
    </aside>
  )
}

export default AsideMenu;