import React from "react";

// import projects
import Spotify from "./projects/Spotify";
import CubeTimer from "./projects/CubeTimer";
import ToDoApp from "./projects/ToDoApp";
import UbuntuConfiguration from "./projects/UbuntuConfiguration";
import SamaritanMinistries from "./projects/SamaritanMinistries";

const Projects = () => {
	return (
		<div className="section">
			<div className="section__title">Projects</div>
			<div className="section__content">
				<Spotify />
				<CubeTimer />
				<UbuntuConfiguration />
				<ToDoApp />
				<SamaritanMinistries />
			</div>
		</div>
	);
};

export default Projects;
