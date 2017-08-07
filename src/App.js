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

        <div className="area"></div>
          <nav className="main-menu">
          <h1 className="nav-title">Dionne Phua</h1>
          <ul>
              <li>
                  <a href="#">

                      <i className="fa fa-home fa-2x"></i>
                      <span className="nav-text">
                          <Link to='/'>Home</Link>
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="#">
                      <i className="fa fa-gamepad fa-2x"></i>
                      <span className="nav-text">
                          Project 1
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="#">
                     <i className="fa fa-map-marker fa-2x"></i>
                      <span className="nav-text">
                          Project 2
                      </span>
                  </a>

              </li>
              <li className="has-subnav">
                  <a href="#">
                     <i className="fa fa-users fa-2x"></i>
                      <span className="nav-text">
                          Project 3
                      </span>
                  </a>

              </li>
              <li>
                  <a href="#">
                      <i className="fa fa-hand-paper-o fa-2x" aria-hidden="true"></i>
                      <span className="nav-text">
                          Project 4
                      </span>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <i className="fa fa-envelope fa-2x"></i>
                      <span className="nav-text">
                          <Link to='/contact'>Contact me</Link>
                      </span>
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
