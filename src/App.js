import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import {HashRouter, Link} from 'react-router-dom';
import Main from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        {/* side nav bar */}
        <div className="area"></div>
          <nav className="main-menu">

          <ul>
              <li>
                  <a href="/" className="nav-a">

                      <i className="fa fa-home fa-2x nav-fa"></i>
                      <span className="nav-text">
                          Home
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="https://dionnephualiann.github.io/game_project/" target="_blank" className="nav-a">
                      <i className="fa fa-gamepad fa-2x nav-fa"></i>
                      <span className="nav-text">
                          Burger Stack em' Up
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="https://project2-summon-auntie.herokuapp.com/" target="_blank" className="nav-a">
                     <i className="fa fa-map-marker fa-2x nav-fa"></i>
                      <span className="nav-text">
                          Report Summon Auntie
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="https://ancient-everglades-11615.herokuapp.com/" target="_blank" className="nav-a">
                     <i className="fa fa-users fa-2x nav-fa"></i>
                      <span className="nav-text">
                          Mentor Match
                      </span>
                  </a>

              </li>
              <li>
                  <a href="https://expressive-86f54.firebaseapp.com/" target="_blank" className="nav-a">
                      <i className="fa fa-hand-paper-o fa-2x nav-fa" aria-hidden="true"></i>
                      <span className="nav-text">
                          Expressive
                      </span>
                  </a>
              </li>
              <li>
                  <a href="https://dionnephualiann.carbonmade.com/" target="_blank" className="nav-a">
                      <i className="fa fa-grav fa-2x nav-fa" aria-hidden="true"></i>
                      <span className="nav-text">
                          Art Portfolio
                      </span>
                  </a>
              </li>
              <li>
                  <a className="nav-a">
                  <Link to="/contact" className="nav-a-Link">
                      <i className="fa fa-envelope fa-2x nav-fa"></i>

                      <span className="nav-text">
                          Contact me
                      </span>
                      </Link>
                  </a>

              </li>
            </ul>
      </nav>



      <Grid>
        <Main>
        </Main>
      </Grid>

    </div>
    </div>

    );
  }
}

export default App;
