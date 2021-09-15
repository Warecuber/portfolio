import { React } from "react";
import Project from "../../ui/Project";

import cubeTimerImg from "./img/cube_timer.png";

const CubeTimer = () => {
	return (
		<Project
			title="Cube Timer"
			titleStyle={{ backgroundColor: "#4F7CAC", color: "white" }}
			bodyStyle={{ backgroundColor: "#4F7CAC", color: "white" }}
			projectSummary={
				<div>
					<div className="project__links">
						<a
							href="https://github.com/Warecuber/cubetimer"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Source code
						</a>
						<a
							href="https://warecuber.github.io/cubetimer/"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Working Demo
						</a>
					</div>
					<p className="project__description">
						This was a simple Rubik's Cube timer with a custom scramble
						generator and solve history. It's a web app using mostly jQuery and
						ES5 JS. I learned about creating interactive modals and
						reading/writing data in localStorage.
						<img
							src={cubeTimerImg}
							alt="Cuber Timer screenshot"
							className="project__img"
						/>
					</p>
				</div>
			}
		/>
	);
};

export default CubeTimer;
