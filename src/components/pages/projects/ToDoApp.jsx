import { React } from "react";
import Project from "../../ui/Project";

const ToDoApp = () => {
	return (
		<Project
			title="ToDo App"
			titleStyle={{ backgroundColor: "#52796f", color: "white" }}
			bodyStyle={{ backgroundColor: "#52796f", color: "white" }}
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
							href="https://todoapp-1120.herokuapp.com/register"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Create an Account
						</a>
						<a
							href="https://github.com/Warecuber/todo_app/releases/tag/1.1"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Download The Windows App
						</a>
					</div>
					<p className="project__description">
						This is a simple to do list using ElectronJS for the native app. The
						backend is ExpressJS with a MongoDB database. This was my first time
						utilizing custom authentication in a project. Through the process I
						learned about storing a hashed and salted password, creating a JSON
						Web Token, sending emails from a Gmail account via NodeJS, and
						creating a self-service password reset.
					</p>
				</div>
			}
		/>
	);
};

export default ToDoApp;
