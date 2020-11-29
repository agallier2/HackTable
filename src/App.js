import React, {useEffect,useState} from "react";
import './App.css';
import Result from "./Result";
import Function from "./Function";
import Home from "./Home";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

const App = () => {

  const Router = BrowserRouter;

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Use" component={Function} />
      </Switch>
      </Router>
    </div>
  )
}

export default App;
