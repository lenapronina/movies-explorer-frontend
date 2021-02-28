
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'; 
import useViewport from '../../utils/useViewport';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AsideMenu from '../AsideMenu/AsideMenu';

function App() {


  const routes = ["/signup", "/signin"];

  const { width } = useViewport();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const checkScreenWidth = () => {
    if(width < 800){
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }

  function toggleMobileMenu(){
    if(isMenuOpen){
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }


  useEffect(()=> {
    checkScreenWidth();
  });

  return (
    <div className="app">
      { useRouteMatch(routes) ?
        null
        : ( <Header 
              mobileMenu={mobileMenu}
              clickMenu={toggleMobileMenu}
            />
          )
      }
      <AsideMenu
        isOpen={isMenuOpen}
        closeMenu={toggleMobileMenu} 
      />
      <Switch>
        <Route path="/signup">
          <p>signup</p>
        </Route>
        <Route path="/signin">
          <p>/signin</p>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies 
            path='/saved-movies'
          />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
