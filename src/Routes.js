import React, {PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/ContactPage/ContactPage';
import GalleryPage from "./components/GalleryPage/GalleryPage";


const Main = (p) => (
  // switch is a component from react-router
  <Switch>
    <Route path='/contact' component={ContactPage} />
    <Route path='/project/:id' component={GalleryPage} />
    <Route
			path='/'
			render={(props) => <LandingPage {...props} {...p} />}
			/>
  </Switch>
);

export default Main;
