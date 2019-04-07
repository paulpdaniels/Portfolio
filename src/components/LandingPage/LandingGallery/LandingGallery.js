import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Grid, Image, Row} from 'react-bootstrap';

import './LandingGallery.css';

class LandingGallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					gallery: '',
					title: 'Personal Work',
					img: 'https://carbonmade-media.accelerator.net/32820771;960x1483.webp'
				},
				{
					title: 'Marvel Mighty Heroes',
					img: 'https://carbonmade-media.accelerator.net/32764869;792x612.webp'
				},
				{
					title: 'Deckstorm',
					img: 'https://carbonmade-media.accelerator.net/32764858;612x792.webp',
					posY: '17%'
				},
				{
					title: 'Xmen: Battle of the atom',
					img: 'https://carbonmade-media.accelerator.net/32766514;612x792.webp'
				},
				{
					title: 'Other',
					img: 'https://carbonmade-media.accelerator.net/25919657;960x621.webp'
				}
			]
		};
	}

	render() {
		return (
			<Grid>
				{
					this.state.sections.map(({title, img, posY, gallery}, key) => (
						<section className="g-hero-flex" key={key}>
							<Link to={{
								pathname: '/gallery',
								search: `?p=${gallery}`
							}}
										className="g-hero-flex__item"
										style={{
											background: `#222 url("${img}") no-repeat`,
											backgroundSize: '100%',
											backgroundPositionY: posY || '25%'
										}}
							>
								<h2 className="g-hero-flex__title">{title}</h2>
							</Link>
						</section>
					))
				}
			</Grid>
		)
	}
};

export default LandingGallery;