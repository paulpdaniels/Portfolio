import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './LandingHeader.css';


class LandingHeader extends Component {
  render() {

    return (
      <div className="headerArt">
           <Col md={4} className="header-contents pull-left">
             <div className="header-title">Dionne Phua</div>
             <p className="subheader-text">Creative Lead | Designer | Concept Artist</p>
             {/*<a href="#about" className="btn btn-primary btn-xl page-scroll" id="page-scroll">*/}
             {/*Find Out More!</a>*/}
           </Col>
      </div>

    );
  }
}

export default LandingHeader;
