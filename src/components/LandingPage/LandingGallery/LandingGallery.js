import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Col, Grid, Image, NavItem, Row} from 'react-bootstrap';

import './LandingGallery.css';

const LandingGallery = (props) => {
	return (
		<Grid>
			<Row>
				<Col xs={8}>
					{
						props.sections.map(({title, img, posY, gallery}, key) => (
							<section className="g-hero-flex" key={key}>
								<Link to={{
									pathname: `/project/${key}`,
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
				</Col>
			</Row>
		</Grid>
	)
};

export default LandingGallery;