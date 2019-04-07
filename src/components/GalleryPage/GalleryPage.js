import React, {Component} from 'react';
import {Grid, Image, Row} from "react-bootstrap";

class GalleryPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Image src="https://carbonmade-media.accelerator.net/25919657;960x621.webp"/>
				<Image src="https://carbonmade-media.accelerator.net/25919657;960x621.webp"/>
			</div>
		);
	}

}

export default GalleryPage;