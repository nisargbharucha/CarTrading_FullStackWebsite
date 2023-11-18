// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './main';
import Types from './Types';
import Listings from './Listings';
import Details from './Details';
import Login from './Login';
import backgroundImage from './assets/back.png';
import './styles/index.css'; 
import Header from './Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/types" component={Types} />
          <Route path="/listings" component={Listings} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
