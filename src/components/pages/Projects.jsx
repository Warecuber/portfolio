import React from "react";

// import projects
import Spotify from "./projects/Spotify";

const Projects = () => {
	return (
		<div className="section">
			<div className="section__title">Projects</div>
			<div className="section__content">
				<Spotify />
			</div>
		</div>
	);
};

export default Projects;
