import React from "react";

const Home = () => {
	return (
		<div>
			<p className="intro">
				Hi, I'm John Ware! I've taught myself fullstack development.
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
								className="is--link"
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
								className="is--link"
								target="_blank"
								rel="noreferrer"
							>
								ElectronJS
							</a>
						</p>
						<p>ReactJS</p>
						<p>React Native</p>
						<p>Docker</p>
						<p>Nginx</p>
						<p>MySQL</p>
						<p>MongoDB</p>
						<p>GitLab/Github</p>
						<p>GitLab CI pipelines</p>
						<p>Kemp load balancer</p>
						<p>Ubuntu/CentOS Linux</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
