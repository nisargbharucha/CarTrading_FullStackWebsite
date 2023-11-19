// src/App.js
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './main';
import Types from './Types';
import Listings from './Listings';
import Details from './Details';
import Login from './Login';
import Register from './Register';
import backgroundImage from './assets/back.png';
import './styles/index.css'; 
import Header from './Header';
import Sell from './Sell.js';
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.pathname === '') {
      document.getElementById('pageBody').style.background = "url(./assets/index.css) no-repeat center center fixed";
  }
});
function App() {
  return (
    useEffect(() => {
      // Set 'login' local storage variable to false if it's not already set
      if (localStorage.getItem('login') === null) {
        localStorage.setItem('login', 'false');
      }
    }, []),
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/types" component={Types} />
          <Route path="/listings" component={Listings} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/sell" component={Sell}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
