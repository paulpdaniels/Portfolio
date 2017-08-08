import React, {Component} from 'react';
import { Row, Grid } from 'react-bootstrap';

import LandingHeader from './LandingHeader/LandingHeader';
import LandingFeatures from './LandingFeatures/LandingFeatures';
import LandingAbout from './LandingAbout/LandingAbout';
import LandingFooter from './LandingFooter/LandingFooter';

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
        <Row className="LAbout">
          <LandingAbout />
        </Row>
        <Row className="LFeatures">
          <LandingFeatures />
        </Row>
        <Row className="LFooter">
          <LandingFooter />
        </Row>
      </Grid>
    );
  }
}

export default LandingPage;
