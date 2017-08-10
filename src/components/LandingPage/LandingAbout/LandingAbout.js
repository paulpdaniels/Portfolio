import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './LandingAbout.css';

class LandingAbout extends Component {
  render() {
    return (
      <Grid fluid>
      <div className="about-section" id="about">

         <h1 className="about-title">About Me</h1>
           <p className="about-text">Hi! I am Dionne. I graduated from Ringling College of Art and Design with a B.F.A in Computer Animation. I lived and worked in San Francisco Bay Area for almost 7years working as a generalist artist in the mobile game industry. Upon leaving the United States, I picked up a web developement along the way in Singapore at General Assembly in greater hopes to pursue my dreams in working on Augmented reality and virtual reality projects. I am one-of-a-kind that can offer to companies and teams I work with, a combination of both technical and creative perspective and skill set to the table. Feel free to check out my projects and professional profile.</p>

      </div>
      </Grid>
    );
  }
}

export default LandingAbout;
