import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './LandingFooter.css';

class LandingFooter extends Component {
  render() {
    return (
      <Grid fluid>
      <div className="about-text">
         <h1>Contact me for more information</h1>

        <div className="social-links">
          <ul className="social-network social-circle">
                     <li><a href="#" className="icoGithub" title="Github"><i className="fa fa-github"></i></a></li>
                     <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>

        <div className="Resume"></div>
      </div>
      </Grid>
    );
  }
}

export default LandingFooter;
