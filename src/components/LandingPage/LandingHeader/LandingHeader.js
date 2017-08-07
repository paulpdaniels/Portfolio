import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './LandingHeader.css';

class LandingHeader extends Component {
  render() {
    return (
      <div className="headerArt">
           <Col md={12} className="headerArtImg">
           </Col>
      </div>

    );
  }
}

export default LandingHeader;
