
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  
  const [ isProfileEdit, setProfileEdit ] = useState(false);

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileError, setProfileError] = useState('');

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
  }

  function goSignIn(){
    history.push('/signin');
    setPath('/signin');
  }

  function goSignUp(){
    history.push('/signup');
    setPath('/signup');
  }

  function goMovies(){
    history.push('/movies');
    setPath('/movies');
    if(mobileMenu){
      toggleMobileMenu();
    }
  }

  function goSavedMovies(){
    history.push('/saved-movies');
    setPath('/saved-movies');
    if(mobileMenu){
      toggleMobileMenu();
    }

  }

  function goProfile(){
    history.push('/profile');
    setPath('/profile');
    if(mobileMenu){
      toggleMobileMenu();
    }
  }

  function handleRegisterSuccess(value){
    setRegisterSuccess(value);
  }

  const handleUpdateUser = (updatedData) => {
    
    MainApi.updateUserInfo(updatedData, localStorage.getItem('jwt'))
      .then((updatedUserData)=> {
        // update user info avatar with new data
        setCurrentUser(updatedUserData);
        setProfileEdit(false);
      })
      .catch((err)=> {
        setProfileError(err);
        setProfileEdit(true);
      });
  }

  const onLogin = (inputValues) => {
    MainApi.authorize(inputValues.email, inputValues.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push('/movies');
          setPath('/movies');
        }
      })
      .catch((err) => {
        console.log(err)
        setLoginError(err); 
      });
  }

  const onRegister = (inputValues) => {
    MainApi.register(inputValues.name, inputValues.email, inputValues.password)
    .then((res) => {
      if(res.statusCode !== 400){
        handleRegisterSuccess(true);
        onLogin(inputValues);
      }
    })
    .catch((err)=> {
      //handleRegisterSuccess(false);
      console.log(err)
      setRegisterError(err); 
    });
  }

  function handleSignOut(){
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/signin');
    setPath('/signin');
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      MainApi.getContent(jwt)
        .then((res) => {
          if(res){
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err)); 
    }   
  }

  useEffect(()=> {
    checkScreenWidth();
  });

  useEffect(() => {
    tokenCheck();
  }, [loggedIn, history]);

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
                  loggedIn={loggedIn}
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
          <Route 
            exact path="/"
            component={Main}
            />
          <Route path="/signup">
            <Register 
              handleRegister={onRegister}
              registerError={registerError}
              handleRegisterError={setRegisterError}
              goSignIn={goSignIn}
              goLanding={goLanding} 
            />
          </Route>
          <Route path="/signin">
            <Login
              handleLogin={onLogin}
              loginError={loginError}
              handleLoginError={setLoginError}
              goSignUp={goSignUp}
              goLanding={goLanding}
            />
          </Route>
          <ProtectedRoute 
            path="/profile"
            loggedIn={loggedIn} 
            isProfileEdit={isProfileEdit}
            setProfileEdit={setProfileEdit}
            profileError={profileError}
            handleProfileError={setProfileError}
            handleUpdateUser={handleUpdateUser}
            handleSignOut={handleSignOut}
            component={Profile}
          />
          <ProtectedRoute 
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <Route path="*">
            <NotFoundPage 
              goBack={goBack}
            />
          </Route>
          <Route path="/">
            {!loggedIn ? (<Redirect to="/movies" />) : (<Redirect to="/signin" />)}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
