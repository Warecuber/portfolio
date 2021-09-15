import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="section">
			<div className="section__title">
				Hi, I'm John Ware! I've taught myself fullstack development.
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
					<p>Languages Used</p>
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
					<p>Frameworks/technologies Used</p>
					<div className="experience">
						<p>ExpressJS</p>
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
						<p>jQuery</p>
						<p>React Native</p>
						<p>Docker</p>
						<p>Nginx</p>
						<p>MySQL</p>
						<p>MongoDB</p>
						<p>GitLab/Github</p>
						<p>GitLab CI pipelines</p>
						<p>bcrypt</p>
						<p>Kemp load balancer</p>
						<p>Ubuntu/CentOS Linux</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
