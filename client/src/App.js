import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Login from './Login/Login';
import Success from './Success/Success';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
