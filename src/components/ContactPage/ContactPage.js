import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Col md={12} className="headerArtImg">
          <Col md={4} className="header-contents pull-left">
            <div className="header-title">Dionne Phua</div>
            <p className="subheader-text">Web Developer | Concept Artist</p>
            <p>Write me an email</p>
          </Col>
        </Col>

        <form method="POST" action="http://formspree.io/li.ann86@gmail.com">
           <input type="email" name="email" placeholder="Your email" />
           <textarea name="message" placeholder="Your message" defaultValue={""} />
           <button type="submit">Send</button>
        </form>
      </Grid>
    );
  }
}

export default ContactPage;
