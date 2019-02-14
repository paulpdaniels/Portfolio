import React, {PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/ContactPage/ContactPage';


const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path='/contact' component={ContactPage} />
    <Route path='/' component={LandingPage} />
  </Switch>
);

export default Main;
