import React, {Component} from 'react';
import { Row, Grid } from 'react-bootstrap';

import LandingHeader from './LandingHeader/LandingHeader';
import LandingFeatures from './LandingFeatures/LandingFeatures';
import LandingAbout from './LandingAbout/LandingAbout';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid>
        <Row className="LHeading">
          <LandingHeader />
        </Row>
        <Row className="LFeatures">
          <LandingFeatures />
        </Row>
        <Row className="LAbout">
          <LandingAbout />
        </Row>
      </Grid>
    );
  }
}

export default LandingPage;
