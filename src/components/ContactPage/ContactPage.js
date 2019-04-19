import React, { Component } from 'react';
import {Grid, Col, FormGroup, FormControl, Button} from 'react-bootstrap';

import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <Grid fluid>
        <Col md={12} className="headerArtImg-contact">
          <Col md={4} className="header-contents-contact pull-left">
            <div className="header-title-contact">Write me an email</div>
            <p className="subheader-text-contact">Web Developer | Concept Artist</p>
          </Col>
        </Col>

        <form method="POST" action="http://formspree.io/li.ann86@gmail.com" className="email">
        <Col md={12} className="email-form">
            <span className="input input--update">
					       <input className="input__field input__field--update"
                        type="text"
                        id="form-displayName"
                        name="email"
                        />
  					     <label className="input__label input__label--update" htmlFor="form-displayName">
  						<span className="input__label-content input__label-content--update">Your Email</span>
  					</label>
  				</span>
          </Col>

          <Col md={12} className="email-form">
          <FormGroup controlId="formControlsTextarea" className="text-form-area">
          <FormControl componentClass="textarea" placeholder="Write your message here" name="message" defaultValue={""} className="text-form"/>
          </FormGroup>
          </Col>



            <Button type="submit" className="btn btn-primary btn-xl email-submit">Send</Button>


          </form>
      </Grid>
    );
  }
}

export default ContactPage;
