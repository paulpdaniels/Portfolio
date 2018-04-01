import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './LandingAbout.css';

class LandingAbout extends Component {
  render() {
    return (
      <Grid fluid className="st-scroll">

      <div className="about-section" id="about">

         <h1 className="about-title">About Me</h1>
           <p className="about-text">Hi! I am Dionne. I graduated from Ringling College of Art and Design with a B.F.A in Computer Animation. I lived and worked in San Francisco Bay Area for almost 7 years working as a generalist artist in the mobile game industry. I am actively pursuing my dream of becoming an Art Director, and looking to join a team that shares my passion for visual storytelling and bringing those stories to both old and new media. I bring a combination of hard-fought industry experience, technical skills, and creative perspectives along with me. Check out a sampling of my projects and professional profile below.</p>

      </div>

      </Grid>
    );
  }
}

export default LandingAbout;
