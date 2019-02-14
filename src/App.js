import React, {Component} from 'react';
import {Grid, Navbar, Nav} from 'react-bootstrap';

import {HashRouter, Link} from 'react-router-dom';
import Main from './Routes';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <section>
            <article>
              <div className="menu">
                <input id="menu--toggle" type="checkbox"/>
                {/* /#menu--toggle */}
                <label className="menu--toggle__trigger" htmlFor="menu--toggle"/>
                {/* /.menu--toggle__trigger */}
                <label className="menu--toggle__burger" htmlFor="menu--toggle"/>
                {/* /.menu--toggle__burger */}
                <ul className="menu__body">
                  <li className="menu__body-element">
                    <Link to="/" className="nav-a-Link">
                      <a className="menu__body-link">
                        Home
                      </a>
                    </Link>
                    {/* /.menu__body-link */}
                  </li>
                  {/* /.menu__body-element */}
                  <li className="menu__body-element">
                    <a className="menu__body-link" href="https://dionnephualiann.github.io/game_project/"
                       target="_blank" rel="noopener noreferrer">
                      Burger Stack em' Up
                    </a>
                    {/* /.menu__body-link */}
                  </li>
                  {/* /.menu__body-element */}
                  <li className="menu__body-element">
                    <a className="menu__body-link" href="https://project2-summon-auntie.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      Report Summon Auntie
                    </a>
                    {/* /.menu__body-link */}
                  </li>

                  <li className="menu__body-element">
                    <a className="menu__body-link" href="https://ancient-everglades-11615.herokuapp.com/"
                       target="_blank">
                      Mentor Match
                    </a>
                    {/* /.menu__body-link */}
                  </li>

                  <li className="menu__body-element">
                    <a className="menu__body-link" href="https://expressive-86f54.firebaseapp.com/" target="_blank">
                      Expressive
                    </a>
                    {/* /.menu__body-link */}
                  </li>

                  <li className="menu__body-element">
                    <a className="menu__body-link" href="https://dionnephualiann.carbonmade.com/" target="_blank">
                      Art Portfolio
                    </a>
                    {/* /.menu__body-link */}
                  </li>

                  <li className="menu__body-element">
                    <Link to="/contact" className="nav-a-Link">
                      <a className="menu__body-link">
                        Contact Me
                      </a>
                    </Link>
                    {/* /.menu__body-link */}
                  </li>
                  {/* /.menu__body-element */}
                </ul>
                {/* /.menu__body */}
              </div>
              {/* /.menu */}
            </article>
          </section>

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
