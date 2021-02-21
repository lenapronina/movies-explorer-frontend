
import './App.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom'; 

import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const routes = ["/signup", "/signin"];

  return (
    <div className="app">
      { useRouteMatch(routes) ?
        null
        : ( <Header />)
      }
      <Switch>
        <Route path="/signup">
          <p>signup</p>
        </Route>
        <Route path="/signin">
          <p>/signin</p>
        </Route>
        <Route path="/profile">
          <p>профиль</p>
        </Route>
        <Route path="/movies">
          <p>фильмы</p>
        </Route>
        <Route path="/saved-movies">
          <p>сохраненные фильмы</p>
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
