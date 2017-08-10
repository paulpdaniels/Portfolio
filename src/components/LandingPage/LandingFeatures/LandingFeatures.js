import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './LandingFeatures.css';

class LandingFeatures extends Component {
  render() {
    return (
      <div>
      {/* Project Links */}
      <section className="c-hero-flex">
          <a href="https://dionnephualiann.github.io/game_project/" target="_blank" className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Burger Stack em' Up</h2>

          </a>
          <a href="https://project2-summon-auntie.herokuapp.com/" target="_blank" className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Report Summon Auntie</h2>

          </a>
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Mentor Match</h2>
          </a>
          <a href="https://expressive-86f54.firebaseapp.com/" target="_blank" className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Expressive- Real-Time Q&A app.</h2>
          </a>
          <a href="https://dionnephualiann.carbonmade.com/" target="_blank" className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Art Portfolio</h2>
          </a>
        </section>

        {/* Project Description */}
        <Row className="project-description">
          <div className="project-description-header">Project Contents
          </div>


          <Col lg={3} md={3} className="text-center">
            <a href="https://dionnephualiann.github.io/game_project/" target="_blank" className="project-description-link">
              <div className="project-description-box">
                <i className="fa fa-4x fa-gamepad text-primary"></i>
                <h3 className="project-description-title">Burger Stack em' Up</h3>
                <p className="center-block">
                A simple game project that uses arrow key controls and the concept of tetris as the basis. However, do aviod those pesky chilli bombs. Your goal is to get the highest score possible.
                </p>
              </div>
            </a>
          </Col>

          <Col lg={3} md={3} className="text-center">
            <a href="https://project2-summon-auntie.herokuapp.com/" target="_blank" className="project-description-link">
              <div className="project-description-box">
                <i className="fa fa-4x fa-map-marker text-primary"></i>
                <h3 className="project-description-title">Report Summon Auntie</h3>
                <p className="center-block">
                Hate those parking tickets? Me too! "Report Summon Auntie" is a simple web app that allows you to mark her location on the map. Users will also get real time reports on her sightings!
                </p>
              </div>
            </a>
          </Col>

          <Col lg={3} md={3} className="text-center">
            <a href="#" target="_blank" className="project-description-link">
              <div className="project-description-box">
                <i className="fa fa-4x fa-users text-primary"></i>
                <h3 className="project-description-title">Mentor Match</h3>
                <p className="center-block">
                Have you always wanted to shadow someone you've always looked up to in the industry? This app aspires to match you with your desired mentors as well as mantees. This app is still in the works.
                </p>
              </div>
            </a>
          </Col>

          <Col lg={3} md={3} className="text-center">
            <a href="https://expressive-86f54.firebaseapp.com/" target="_blank" className="project-description-link">
              <div className="project-description-box">
                <i className="fa fa-4x fa-hand-paper-o text-primary"></i>
                <h3 className="project-description-title">Expressive</h3>
                <p className="center-block">
                This is collaborative app that helps aid speakers and teachers alike in a real-time Q and A session without being interrupted. Users can also vote their favourite questions that they would like to be addressed.
                </p>
              </div>
            </a>
          </Col>

          <Col lg={3} md={3} className="text-center">
            <a href="https://dionnephualiann.carbonmade.com/" target="_blank" className="project-description-link">
              <div className="project-description-box">
                <i className="fa fa-4x fa-grav text-primary"></i>
                <h3 className="project-description-title">Art Portfolio</h3>
                <p className="center-block">
                Come check out my other set of skills. The creative artsy-farty one- especially if you are into game art. You will find the many popular titles that I have previously worked on in there.
                </p>
              </div>
            </a>
          </Col>

        </Row>
      </div>


    );
  }
}

export default LandingFeatures;
