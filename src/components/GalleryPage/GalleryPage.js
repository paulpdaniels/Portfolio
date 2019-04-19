import React from 'react'
import LazyLoad, {forceCheck} from 'react-lazyload'
import './GalleryPage.css'

const images = {
	mightyHeros: {
		width: 792,
		src: ["https://carbonmade-media.accelerator.net/32764869;792x612.webp", "https://carbonmade-media.accelerator.net/32764866;792x612.webp", "https://carbonmade-media.accelerator.net/32764867;792x612.webp", "https://carbonmade-media.accelerator.net/32764868;792x612.webp", "https://carbonmade-media.accelerator.net/32764865;612x792.webp"]
	},
	deckStorm: {
		width: 792,
		src: ["https://carbonmade-media.accelerator.net/32764858;612x792.webp", "https://carbonmade-media.accelerator.net/32764857;792x612.webp", "https://carbonmade-media.accelerator.net/32764859;792x612.webp", "https://carbonmade-media.accelerator.net/32764860;612x792.webp"]
	},
	xmen: {
		width: 792,
		src: ["https://carbonmade-media.accelerator.net/32766514;612x792.webp", "https://carbonmade-media.accelerator.net/24488827;960x568.webp", "https://carbonmade-media.accelerator.net/24488826;960x1706.webp", "https://carbonmade-media.accelerator.net/24488831;960x853.webp", "https://carbonmade-media.accelerator.net/24488828;960x1706.webp", "https://carbonmade-media.accelerator.net/32766515;792x496.webp", "https://carbonmade-media.accelerator.net/24488825;960x568.webp", "https://carbonmade-media.accelerator.net/24488823;960x1129.webp"]
	},
	others: {
		width: 960,
		src: ["https://carbonmade-media.accelerator.net/25919657;960x621.webp", "https://carbonmade-media.accelerator.net/25919659;960x621.webp", "https://carbonmade-media.accelerator.net/25919660;960x621.webp", "https://carbonmade-media.accelerator.net/25919665;960x1483.webp", "https://carbonmade-media.accelerator.net/25919672;960x621.webp", "https://carbonmade-media.accelerator.net/32766522;960x621.webp", "https://carbonmade-media.accelerator.net/32766534;792x612.webp", "https://carbonmade-media.accelerator.net/32766536;792x612.webp"]
	},
	personal: {
		width: 960,
		src: ["https://carbonmade-media.accelerator.net/32820771;960x1483.webp", "https://carbonmade-media.accelerator.net/32820782;960x1581.webp", "https://carbonmade-media.accelerator.net/20274155;960x1745.webp", "https://carbonmade-media.accelerator.net/18131906;960x621.webp", "https://carbonmade-media.accelerator.net/16797187;960x621.webp", "https://carbonmade-media.accelerator.net/25919611;960x621.webp", "https://carbonmade-media.accelerator.net/16798598;960x621.webp", "https://carbonmade-media.accelerator.net/25919613;960x621.webp", "https://carbonmade-media.accelerator.net/25919610;960x621.webp"]
	}
};

class GalleryPage extends React.Component {

	constructor(props) {
		super(props);
		this.onImageLoad = this.onImageLoad.bind(this);
		this.state = {dimensions: []};
	}

	componentDidMount() {
		forceCheck();
	}

	onImageLoad(index) {
		const self = this;
		return ({target}) => {
			const {dimensions} = this.state;
			dimensions[index] = {height: target.naturalHeight};
			this.setState({dimensions})
		}
	}

	render() {
		const {match} = this.props;
		const current = images[match.params.id];
		const imageSet = (current && current.src) || [];
		return (
			<div className="pieces  full">
				{
					imageSet.map((image, i) => {
						const height = /;\d+x(\d+)\.webp/i.exec(image)[1];
						let afterPercentage = height / current.width;
						afterPercentage = (afterPercentage > 1 ? afterPercentage - 1 : afterPercentage) * 100;

						return (
							<carbon-piece key={i} className="image" style={{width: '100%'}}>
								<carbon-image id={`image-${match.params.id}-${i}`} style={{maxWidth: current.width || 960}}>
									<style dangerouslySetInnerHTML={{
										__html: `
										#image-${match.params.id}-${i}:before {
										  display: block;
  										padding-top: 100%;
  										content: '';
										}
										#image-${match.params.id}-${i}:after {
											display: block;
											padding-top: ${afterPercentage}%;
											content: '';
										}
								`
									}}>
									</style>
									<LazyLoad once>
										<img className="lazy" src={image}/>
									</LazyLoad>
								</carbon-image>

							</carbon-piece>
						)
					})
				}
			</div>);
	}
}

export default GalleryPage;