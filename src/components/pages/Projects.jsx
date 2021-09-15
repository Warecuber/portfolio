import React from "react";

// import projects
import Spotify from "./projects/Spotify";
import CubeTimer from "./projects/CubeTimer";
import ToDoApp from "./projects/ToDoApp";
import UbuntuConfiguration from "./projects/UbuntuConfiguration";
import SamaritanMinistriesClone from "./projects/SamaritanMinistriesClone";
import ServicePortal from "./projects/ServicePortal";

const Projects = () => {
	return (
		<div className="section">
			<div className="section__title">Projects</div>
			<div className="section__content">
				<Spotify />
				<CubeTimer />
				<UbuntuConfiguration />
				<ToDoApp />
				<SamaritanMinistriesClone />
				<ServicePortal />
			</div>
		</div>
	);
};

export default Projects;
