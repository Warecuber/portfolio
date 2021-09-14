import { React } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="header">
			<div className="header__title">John Ware</div>
			<div className="header__button_container">
				<Link to="/" className="header__button">
					Home
				</Link>
				<Link to="/projects" className="header__button">
					Projects
				</Link>
				<a
					href="https://github.com/warecuber"
					target="_blank"
					className="header__button"
				>
					Github
				</a>
			</div>
		</div>
	);
};

export default NavBar;
