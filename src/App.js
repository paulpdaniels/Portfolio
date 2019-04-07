import React, {Component} from 'react';
import {Grid, Navbar, Nav, NavItem, Row} from 'react-bootstrap';

import {HashRouter, Link} from 'react-router-dom';
import Main from './Routes';

import './App.css';
import Col from "react-bootstrap/es/Col";

class App extends Component {

	constructor (props) {
		super(props)

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
					img: 'https://carbonmade-media.accelerator.net/32766514;612x792.webp',
					posY: '20%'
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
			<div className="App">
				<div className="App-header">
					<Grid className="no-margin">
						<Col xs={2}>
								<Nav className="flex-column" style={{position: 'fixed'}}>
									<div className="header-title">Dionne Phua</div>
									<NavItem href='/'>Home</NavItem>
									{
										this.state.sections.map(({title}, key) => (
											<NavItem key={key}>{title}</NavItem>
										))
									}
								</Nav>
						</Col>
						<Col xs={10}>
							<Main sections={this.state.sections}>
							</Main>
						</Col>
					</Grid>

				</div>
			</div>

		);
	}
}

export default App;
