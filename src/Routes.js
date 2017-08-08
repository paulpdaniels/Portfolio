import React, {PropTypes} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/ContactPage/ContactPage';


const Main = () => (
  // switch is a component from react-router
  <Router>
  <Switch>
    <Route path = '/' component = {LandingPage}></Route>
    <Route path = '/contact' component = {ContactPage}></Route>
  </Switch>
  </Router>
)

export default Main;
