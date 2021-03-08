
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Redirect, useHistory } from 'react-router-dom'; 
import useViewport from '../../utils/useViewport';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AsideMenu from '../AsideMenu/AsideMenu';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {

  const history = useHistory();

  const { width } = useViewport();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const routes = ["/signup", "/signin", "/notFound"];

  function checkScreenWidth(){
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

  function goBack(){
    history.goBack(); 
  }


  useEffect(()=> {
    checkScreenWidth();
  });

  return (
    <div className="app">
      { useRouteMatch(routes) ?
        null
        : ( 
            <>
              <Header 
                mobileMenu={mobileMenu}
                clickMenu={toggleMobileMenu}
              />
              <AsideMenu
                isOpen={isMenuOpen}
                closeMenu={toggleMobileMenu} 
              />
            </>
          )
      }
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
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
        {/* Redirect would be fix to real path in the next step */}
        <Route path="/notFound">
          <NotFoundPage 
            goBack={goBack}
          />
        </Route>
        <Redirect from="*" to="/notFound" />
         {/* Redirect would be fix to real path in the next step */}
      </Switch>
    </div>
  );
}

export default App;
