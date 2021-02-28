import React from 'react';
import Navigation from '../Navigation/Navigation';
import './AsideMenu.css';

function AsideMenu({isOpen, closeMenu}) {

  const menuOpened = isOpen ?  ' aside_opened' : null;

  return(
    <aside className={`aside ${menuOpened}`}>
      <div className="aside__menu">
        <button className="aside__close-button" onClick={closeMenu}></button>
        <Navigation />
      </div>
    </aside>
  )
}

export default AsideMenu;