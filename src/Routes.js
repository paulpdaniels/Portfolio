import React, {PropTypes} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import ContactPage from './components/ContactPage/ContactPage';
import GalleryPage from "./components/GalleryPage/GalleryPage";
import LandingAbout from "./components/LandingPage/LandingAbout/LandingAbout";

const Main = (p) => (
	// switch is a component from react-router
	<main role="main">
		<Switch>
			<Route path='/contact' component={ContactPage}/>
			<Route path='/about' component={LandingAbout}/>
			<Route path='/projects/:id' component={GalleryPage}/>
			<Route
				path='/'
				render={(props) => <LandingPage {...props} {...p} />}
			/>
		</Switch>
	</main>
);

export default Main;
