
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, useRouteMatch, Redirect, useHistory } from 'react-router-dom'; 
import useViewport from '../../utils/useViewport';
import { 
  MOVIES_API_BASEURL,
  CARD_COUNT,
  CARD_COUNT_MORE,
  SCREEN_WIDTH } from '../../utils/constants';

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
import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/UserContext';

function App() {

  // set useState for CurrentUserContext
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: null
  });

  const history = useHistory();

  const { width } = useViewport();

  const [cardCount, setCardCount]= useState(0);
  const [cardCountMore, setCardCountMore]= useState(0);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [path, setPath] = useState('/');
  
  const [ isProfileEdit, setProfileEdit ] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileError, setProfileError] = useState('');

  const routes = ["/signup", "/signin", "/notFound"];

  // check time, when search is starting
  const [isSearching, setSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const [searchFail, setSearchFail] = useState(false); 

  const [initialMovies, setInintialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const checkStorage = useCallback(() => {
    if(localStorage.getItem('movies')) {
      // convert string from storage to array
      // *CHECK THIS NEXT STEP*
      const dataFromStorage = JSON.parse(localStorage.getItem('movies'));
      // update movies state
      setInintialMovies(dataFromStorage);
    } else {
        moviesApi.getAllMovies()
          .then((res)=>{
            if(res){
            // use variable for initial cards (left only keys for MainApi)
              const resMovies = res.map((item) => ({
                country: item?.country || 'Страна не указана',
                director: item?.director || 'Режиссёр не указан',
                duration: item?.duration  || 0,
                year: item?.year  || 'Год не указан',
                description: item?.description  || 'Нет описания',
                image: item?.image?.url ? `${MOVIES_API_BASEURL}${item.image.url}` : '',
                trailer: item?.trailerLink || '',
                thumbnail: '',
                nameRU: item?.nameRU  || 'Нет названия',
                nameEN: item?.nameEN  || 'Нет названия',
                movieId: item?.id  || ''
              }));
              
          
              // update allMovies state + write to local storage
              setInintialMovies(resMovies);
              storeMovies(resMovies);
          } 
        })
        .catch((err)=> {
          console.log(err);
          setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          setSearchFail(true);
        })
      }
  }, []);


  const storeMovies = (moviesSet) => {
    // convert movies array to string 
    // *CHECK THIS NEXT STEP*
    localStorage.setItem('movies', JSON.stringify(moviesSet));
  }

  function removeItemFormStorage(item){
    localStorage.removeItem(item);
  }

  const filterMovies = (movies, keyword, selectedShort) => {
    if(!keyword){
      setSearchMessage('Нужно ввести ключевое слово');
      setSearchFail(true);
    } else if(!movies) {
      setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      setSearchFail(true);
    } else {
      const filterResult = []
      movies.forEach((movie) => {
        const letterFilter = movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyword.toLowerCase());
        const durationFilter = selectedShort ? (movie.duration <= 40) : (movie.duration > 40)
        if(letterFilter && durationFilter){
          filterResult.push(movie);
        }}
      );
      
      if(filterResult.length>0){
        setSearchFail(false);
      } else {
        setSearchMessage('Ничего не найдено');
        setSearchFail(true);
      }

      setFilteredMovies(filterResult);    
    }
  }

  function checkScreenWidth(){
    if(width > SCREEN_WIDTH.desktop){
      setMobileMenu(false);
      setCardCount(CARD_COUNT.desktop);
      setCardCountMore(CARD_COUNT_MORE.desktop);
    } else if(width > SCREEN_WIDTH.mobile) {  
      setMobileMenu(true);
      setCardCount(CARD_COUNT.tablet);
      setCardCountMore(CARD_COUNT_MORE.mobile);
    } else {
      setMobileMenu(true);
      setCardCount(CARD_COUNT.mobile);
      setCardCountMore(CARD_COUNT_MORE.mobile);
    }
  }

  function resetSearchParams(){
    setFilteredMovies([]);
    setSearchFail(false);
    setSearchMessage('');
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
    resetSearchParams();
  }

  function goSignIn(){
    history.push('/signin');
    setPath('/signin');
    resetSearchParams();
  }

  function goSignUp(){
    history.push('/signup');
    setPath('/signup');
    resetSearchParams();
  }

  function goMovies(){
    history.push('/movies');
    setPath('/movies');
    resetSearchParams();
    if(mobileMenu){
      toggleMobileMenu();
    }
  }

  function goSavedMovies(){
    history.push('/saved-movies');
    setPath('/saved-movies');
    resetSearchParams();
    if(mobileMenu){
      toggleMobileMenu();
    }

  }

  function goProfile(){
    history.push('/profile');
    setPath('/profile');
    resetSearchParams();
    if(mobileMenu){
      toggleMobileMenu();
    }
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

  const handleSaveCard = (movie) => {
    
    MainApi.saveMovie(localStorage.getItem('jwt'), movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err)=> console.log(err));
  }

  const handleRemoveCard = (movie) => {
    
    MainApi.removeMovie(localStorage.getItem('jwt'), movie)
    .then(() => {
      const newMovies = savedMovies.filter((item) => item._id !== movie._id);
      setSavedMovies(newMovies);
    })
    .catch((err)=> console.log(err));
  }

  function getSavedMovies (){
    MainApi.getSavedMovies(localStorage.getItem('jwt'))
      .then((data) => {
        const filteredData = data.filter((item)=> item.owner === currentUser._id);
        console.log(filteredData)
        setSavedMovies(filteredData);
      })
      .catch((err)=> console.log(err));
  }

  const onRegister = (inputValues) => {
    MainApi.register(inputValues.name, inputValues.email, inputValues.password)
    .then((res) => {
      if(res.statusCode !== 400){
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
    removeItemFormStorage('jwt');
    removeItemFormStorage('movies');
    setLoggedIn(false);
    resetSearchParams();
    setSavedMovies([]);
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
    checkStorage()
  }, [checkStorage])

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
            loggedIn={loggedIn}
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
            handleSaveCard={handleSaveCard}
            cardCount={cardCount}
            isSearching={isSearching}
            setSearching={setSearching}
            cardCountMore={cardCountMore}
            searchFail={searchFail}
            searchMessage={searchMessage}
            initialMovies={initialMovies}
            filteredMovies={filteredMovies}
            loggedIn={loggedIn}
            handleRemoveCard={handleRemoveCard}
            getSavedMovies={getSavedMovies}
            savedMovies={savedMovies}
            filterMovies={filterMovies}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            handleSaveCard={handleSaveCard}
            isSearching={isSearching}
            setSearching={setSearching}
            searchFail={searchFail}
            searchMessage={searchMessage}
            filterMovies={filterMovies}
            handleRemoveCard={handleRemoveCard}
            getSavedMovies={getSavedMovies}
            loggedIn={loggedIn}
            initialMovies={initialMovies}
            savedMovies={savedMovies}
            component={SavedMovies}
          />
          <Route path="*">
            <NotFoundPage 
              goBack={goBack}
            />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
