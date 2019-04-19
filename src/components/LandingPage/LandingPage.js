import React from 'react';
import './LandingPage.css';
import {Link} from "react-router-dom";

const LandingPage = (props) => {
	return (
		<ul className="projects wider">
			<li className="thumb project placeholder ">
				<Link to="/projects/personal" style={{
					backgroundImage: "url('https://carbonmade-media.accelerator.net/32767447;crop(398,1220,2511,627)/960x240.webp')"
				}}>
					<div className="metadata">
						<div className="bg"/>
						<div className="inner">
							<h1>Personal Work</h1>
						</div>
					</div>
				</Link>
			</li>
			<li className="thumb project placeholder ">
				<Link to="/projects/mightyHeros"
							style={{backgroundImage: "url('https://carbonmade-media.accelerator.net/32767512;crop(0,957,2626,656)/960x240/lossless.webp')"}}>
					<div className="metadata">
						<div className="bg"/>
						<div className="inner">
							<h1>Marvel Mighty Heroes</h1>
						</div>
					</div>
				</Link>
			</li>
			<li className="thumb project placeholder ">
				<Link to="/projects/deckstorm" style={{
					backgroundImage: "url('https://carbonmade-media.accelerator.net/24488829;crop(0,557,2550,637)/960x240.webp')"
				}}>
					<div className="metadata">
						<div className="bg"/>
						<div className="inner">
							<h1>Deckstorm</h1>
						</div>
					</div>
				</Link>
			</li>
			<li className="thumb project placeholder ">
				<Link to="/projects/4"
							style={{backgroundImage: "url('https://carbonmade-media.accelerator.net/32767447;crop(398,1220,2511,627)/960x240.webp')"}}>
					<div className="metadata">
						<div className="bg"/>
						<div className="inner">
							<h1>Xmen:Battle of the Atom</h1>
						</div>
					</div>
				</Link>
			</li>
			<li className="thumb project placeholder ">
				<Link to="/projects/others"
							style={{backgroundImage: "url('https://carbonmade-media.accelerator.net/25919657;crop(0,1012,5100,1275)/960x240.webp')"}}>
					<div className="metadata">
						<div className="bg"/>
						<div className="inner">
							<h1>Others</h1>
						</div>
					</div>
				</Link>
			</li>
		</ul>
	);
}

export default LandingPage;
