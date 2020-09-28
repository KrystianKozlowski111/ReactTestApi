import React from 'react';
import Red from './Red.js';
import App from './App.js';
import Navbar from '../components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Main() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/red">
              <RedRoute />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
function Home() {
  return (
    <>
      <Navbar />
      <App />
    </>
  );
}

function RedRoute() {
  return (
    <>
      <Navbar />
      <Red />
    </>
  );
}

export default Main;
