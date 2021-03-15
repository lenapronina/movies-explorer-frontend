
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
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

import * as MainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/UserContext';

function App() {

  // set useState for CurrentUserContext
  const [currentUser, setCurrentUser] = useState('');

  const history = useHistory();

  const { width } = useViewport();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [path, setPath] = useState('/');

  const [registerSuccess, setRegisterSuccess] = useState(false);

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
    if(history.location.pathname ==='/'){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }  
  }

  function goLanding(){
    history.push('/');
    setPath('/');
    setLoggedIn(true);
  }

  function goSignIn(){
    history.push('/signin');
    setPath('/signin');
    setLoggedIn(false);
  }

  function goSignUp(){
    history.push('/signup');
    setPath('/signup');
    setLoggedIn(false);
  }

  function goMovies(){
    history.push('/movies');
    setPath('/movies');
    setLoggedIn(false);
  }

  function goSavedMovies(){
    history.push('/saved-movies');
    setPath('/saved-movies');
    setLoggedIn(false);
  }

  function goProfile(){
    history.push('/profile');
    setPath('/profile');
    setLoggedIn(false);
  }

  function handleRegisterSuccess(value){
    setRegisterSuccess(value);
  }


  const onRegister = (name, email, password) => {
    MainApi.register(name, email, password)
    .then((res) => {
      if(res.statusCode !== 400){
        handleRegisterSuccess(true);
      } else {
        handleRegisterSuccess(false);
      }
    })
    .catch((err)=> {
      handleRegisterSuccess(false);
      console.log(err);
    });
  }

  const checkLoggedIn = useCallback(() => {
    if(history.location.pathname === '/'){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [history])
  
  useEffect(()=> {
    checkScreenWidth();
  });

  useEffect(()=>{
    checkLoggedIn();
  }, [checkLoggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        { useRouteMatch(routes) ?
          null
          : ( 
              <>
                <Header 
                  pathName={path}
                  loggedIn={loggedIn}
                  signIn={goSignIn}
                  signUp={goSignUp}
                  goMovies={goMovies}
                  goSavedMovies={goSavedMovies}
                  goProfile={goProfile}
                  goLanding={goLanding}
                  mobileMenu={mobileMenu}
                  clickMenu={toggleMobileMenu}
                />
                <AsideMenu
                  isOpen={isMenuOpen}
                  closeMenu={toggleMobileMenu} 
                  signIn={goSignIn}
                  signUp={goSignUp}
                  pathName={path}
                  goMovies={goMovies}
                  goProfile={goProfile}
                  goSavedMovies={goSavedMovies}
                  mobileMenu={mobileMenu}
                />
              </>
            )
        }
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register 
              goLanding={goLanding} 
              signIn={goSignIn}
              handleRegister={onRegister}
            />
          </Route>
          <Route path="/signin">
            <Login
              goLanding={goLanding} 
              signUp={goSignUp}
            />
          </Route>
          <Route path="/profile">
            <Profile 
              goLanding={goLanding}
            />
          </Route>
          <Route path="/movies">
            <Movies 
              path='/movies'
            />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
