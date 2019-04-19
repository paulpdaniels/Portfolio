import React from 'react';
import Link from "react-router-dom/es/Link";
import './LandingNav.css'

const projects = [
	{title: 'Personal Work', id: 'personal'},
	{title: 'Marvel Mighty Heroes', id: 'mightyHeros'},
	{title: 'Deckstorm', id: 'deckstorm'},
	{title: 'Xmen: Battle of the Atom', id: 'xmen'},
	{title: 'Blood Brothers', id: 'bloodbrothers'},
	{title: 'Graphic Art', id: 'art'},
	{title: 'Others', id: 'others'}
]

const LandingNav = () => (
	<nav>
		<ul className="siteLinks">
			<li id="homeLink" className="current ">
				<Link to="/">Portfolio</Link>
			</li>

			<li id="aboutLink">
				<Link to="/about">About</Link>
			</li>

			<li id="contactLink">
				<Link to="/contact">Contact</Link>
			</li>
		</ul>

		<hr/>

		<ul className="projectLinks">
			{projects.map((p, i) => (
				<li id={`project${i + 1}Link`}>
					<Link className="thumbnail" to={`/projects/${p.id}`}>{p.title}</Link>
				</li>
			))}
		</ul>

		<hr />

		<ul className="projectLinks">
			<li id="projectGame">
				<a href="https://dionnephualiann.github.io/game_project/" target="_blank">Play My Game</a>

			</li>
		</ul>
	</nav>
);

export default LandingNav;