import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './LandingFooter.css';

class LandingFooter extends Component {
  render() {
    return (
      <Grid fluid>
        <div className="footer-text">
          {/* Footer Title */}
          <h1 className="footer-title">Contact me for more information</h1>
          {/* Social Icons */}
          <div className="social-links">
              <ul className="social-network social-circle">
                       <li><a href="https://github.com/dionnephualiann" target="_blank" className="icoGithub" title="Github"><i className="fa fa-github"></i></a></li>
                       <li><a href="https://www.linkedin.com/in/dionne-phua-96b7a01b/" target="_blank" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                       <li> <Link to="/contact"><a href="#" target="_blank" className="icoEmail" title="Email"><i className="fa fa-envelope"></i></a></Link></li>
              </ul>
          </div>
          {/* Download Resume */}
          <div className="Resume">
            <form method="get" action="../images/Resume_2017.pdf" target="_blank">
              <button className="btn btn-primary btn-xl download-resume" type="submit">
              Download Resume! <i className="fa fa-file-pdf-o fa-2x icoResume"></i>
              </button>
            </form>
          </div>
          {/* Copyright */}
          <div className="copyrights pull-left">©Dionne Phua. All rights Reserved.</div>
        </div>
      </Grid>
    );
  }
}

export default LandingFooter;
