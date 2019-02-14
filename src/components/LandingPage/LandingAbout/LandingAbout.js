import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import './LandingAbout.css';

class LandingAbout extends Component {
	render() {
		return (
			<Grid fluid className="st-scroll">

				<div className="about-section" id="about">

					<h1 className="about-title">About Me</h1>
					<p className="about-text">
						My name is Dionne Phua. I help people tell visual stories and I want to help tell yours too.
						I am graduate of the Ringling College of Art and Design with over 10 years of experience
						in both the gaming and tech consulting industry. I've been fortunate enough to work both in the US and
						Singapore and to have picked up skills along the way.
						I have worked as a concept artist, a designer, a business consultant and a marketer.
					</p>

					<p>
						On the side I am a passionate hobbyist who seeks out travel, adventure, adrenaline and wonder.
					</p>


				</div>
				{/*<ReactPlayer*/}
				{/*url="https://firebasestorage.googleapis.com/v0/b/fir-test-4e593.appspot.com/o/videos%2FCaasimolarEvo_VFX.mov?alt=media&token=32f102b0-4e92-483e-a361-33e23a67761c"*/}
				{/*playing*/}
				{/*loop={true}*/}
				{/*/>*/}
				{/*<ReactPlayer*/}
				{/*url="https://firebasestorage.googleapis.com/v0/b/fir-test-4e593.appspot.com/o/videos%2FRig_Sample.mov?alt=media&token=7925a754-148c-465d-8162-209afd292686"*/}
				{/*playing*/}
				{/*loop={true}*/}
				{/*/>*/}

			</Grid>
		);
	}
}

export default LandingAbout;
