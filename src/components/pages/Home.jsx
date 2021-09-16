import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="section">
			<div className="section__title">
				Hi, I'm John Ware, a DIY fullstack web developer!
			</div>
			<p>
				Below is a summary of my experience. The{" "}
				<Link to="/projects" className="inline_link">
					projects
				</Link>{" "}
				tab explains some of my personal projects and provices links to
				examples.
			</p>
			<div className="flex row between mobile--column">
				<div className="half-width">
					<p>Languages</p>
					<div className="experience">
						<p>HTML</p>
						<p>CSS</p>
						<p>JavaScript</p>
						<p>
							<a
								href="https://github.com/Warecuber/Ubuntu-Configure"
								className="inline_link"
								target="_blank"
								rel="noreferrer"
							>
								Bash
							</a>
						</p>
						<p>SQL</p>
						<p>BSON</p>
						<p>Python</p>
						<p>Deluge Script</p>
					</div>
				</div>
				<div className="half-width">
					<p>Frameworks/tools</p>
					<div className="experience">
						<p>Bcrypt</p>
						<p>Docker</p>
						<p>
							<a
								href="https://github.com/Warecuber/todo_app"
								className="inline_link"
								target="_blank"
								rel="noreferrer"
							>
								ElectronJS
							</a>
						</p>
						<p>ExpressJS</p>
						<p>Git</p>
						<p>GitLab/Github</p>
						<p>GitLab CI pipelines</p>
						<p>jQuery</p>
						<p>Kemp load balancer</p>
						<p>MongoDB</p>
						<p>MySQL</p>
						<p>MySQL Workbench</p>
						<p>Nginx</p>
						<p>Postman</p>
						<p>
							<a
								href="https://github.com/Warecuber/portfolio"
								className="inline_link"
								target="_blank"
								rel="noreferrer"
							>
								ReactJS
							</a>
						</p>
						<p>React Native</p>
						<p>React Native Debugger</p>
						<p>Regex</p>
						<p>Robo 3T</p>
						<p>Ubuntu/CentOS Linux/WSL</p>
						<p>VSCode</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
