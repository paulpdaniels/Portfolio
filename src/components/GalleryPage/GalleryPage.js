import React, {Component} from 'react';
import {Grid, Image, Jumbotron, Panel, Row} from "react-bootstrap";

class GalleryPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid>
				<Row>
					<Panel>
						<Image src="https://carbonmade-media.accelerator.net/25919657;960x621.webp" fluid/>
					</Panel>
				</Row>
				<Row>
					<Panel>
						<Image src="https://carbonmade-media.accelerator.net/25919657;960x621.webp" fluid/>
					</Panel>
				</Row>
			</Grid>
		);
	}

}

export default GalleryPage;