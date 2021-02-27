
import './App.css';
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'; 

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {

  // define routes where header is not used
  const routes = ["/signup", "/signin"];

  //const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="app">
      { useRouteMatch(routes) ?
        null
        : ( <Header />
          )
      }
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
