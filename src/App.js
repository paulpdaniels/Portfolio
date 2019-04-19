import React, {Component} from 'react';

import Main from './Routes';

import LandingNav from "./components/LandingPage/LandingNav/LandingNav";

class App extends Component {

	constructor(props) {
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
			<div className="wrapper">
				<div className="sidebar">
					<div className="scrollable setup overflowing">
						<div className="rail">
							<div className="handle" style={{height: 218.715, top: 83}}/>
						</div>
						<div className="content" style={{paddingBottom: '36px'}}>
							<header className="bigLogo">
								<a href="/">

									<h1>Dionne Phua</h1>
									<h2 className="tagline hide"/>
								</a>
							</header>
							<LandingNav/>
						</div>
					</div>
				</div>
				<Main sections={this.state.sections}>
				</Main>
			</div>
		);
	}
}

export default App;
