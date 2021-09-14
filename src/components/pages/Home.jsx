import React from "react";

const Home = () => {
	return (
		<div>
			<p>Hi, I'm John Ware! I've taught myself fullstack development.</p>
			<p>I have used the following languages for various projects</p>
			<div className="experience">
				<p>HTML</p>
				<p>CSS</p>
				<p>JavaScript</p>
				<p>
					<a
						href="https://github.com/Warecuber/Ubuntu-Configure"
						className="is--link"
						target="_blank"
					>
						Bash
					</a>
				</p>
				<p>MySQL</p>
				<p>MongoDB</p>
				<p>Python</p>
			</div>
			<p>I have used the following frameworks</p>
			<div className="experience">
				<p>ExpressJS</p>
				<p>
					<a
						href="https://github.com/Warecuber/todo_app"
						className="is--link"
						target="_blank"
					>
						ElectronJS
					</a>
				</p>
				<p>ReactJS</p>
				<p>React Native</p>
			</div>
		</div>
	);
};

export default Home;
