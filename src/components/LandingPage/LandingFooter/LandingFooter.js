import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './LandingFooter.css';

class LandingFooter extends Component {
  render() {
    return (
      <Grid fluid>
      <div className="footer-text">
         <h1 className="footer-title">Contact me for more information</h1>

        <div className="social-links">
          <ul className="social-network social-circle">
                     <li><a href="https://github.com/dionnephualiann" target="_blank" className="icoGithub" title="Github"><i className="fa fa-github"></i></a></li>
                     <li><a href="https://www.linkedin.com/in/dionne-phua-96b7a01b/" target="_blank" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>

        <div className="Resume"></div>

        <div className="copyrights pull-left">©Dionne Phua. All rights Reserved.</div>
      </div>
      </Grid>
    );
  }
}

export default LandingFooter;
