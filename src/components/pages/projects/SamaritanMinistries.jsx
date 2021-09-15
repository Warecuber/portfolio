import { React } from "react";
import Project from "../../ui/Project";
import { Link } from "react-router-dom";

const SamaritanMinistries = () => {
	return (
		<Project
			title="Samaritan Ministries"
			titleStyle={{ backgroundColor: "#595478", color: "white" }}
			bodyStyle={{ backgroundColor: "#595478", color: "white" }}
			projectSummary={
				<div>
					<p className="project__description">
						This project was to rebuild the Samaritan Ministries legacy web
						application from the ground up with a newer style. Since this
						project is only for personal use, it is not publicly accessible. The
						frontend is ReactJS with Redux for state management, the backend 2
						ExpressJS servers, and the database is MySQL. This is my current and
						most intricate project. Please contact me if you would like a demo
						or screenshots of this app.
					</p>
				</div>
			}
		/>
	);
};

export default SamaritanMinistries;
