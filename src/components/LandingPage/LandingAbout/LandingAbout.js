import React, {Component} from 'react';

// import './LandingAbout.css';

class LandingAbout extends Component {
	render() {
		return (
			<div className="about">

				<div className="block info">

					<a className="resumeLink part" href="https://carbonmade-media.accelerator.net/32967135?download=resume.pdf"
						 data-name="resume" rel="nofollow">Download Resume</a>


					<div className="row part" data-name="name">
						<h5>Full name</h5>
						<p>Dionne Phua</p>
					</div>


					<div className="row part" data-name="title">
						<h5>Title</h5>
						<p>Artist ( Generalist)</p>
					</div>


					<div className="row part" data-name="location">
						<h5>Location</h5>
						<p>San Francisco Bay Area</p>
					</div>


					<div className="row part" data-name="blurb">
						<h5>Blurb</h5>
						<p>Jack-of-all-trades</p>
					</div>

				</div>


				<div className="block part" data-name="education">
					<div className="row">
						<h5>Education</h5>

						<div className="experienceBlock">
							<h2>Bachelors of Fine Arts</h2>

							<h2>Ringling College of Art and Design</h2>


							<div className="meta">
								<p>Sarasota, FL <span>&middot;</span> 2007 &ndash; 2010 </p>
							</div>


							<p>Computer Animation Major</p>


						</div>

					</div>
				</div>


			</div>


		);
	}
}

export default LandingAbout;
