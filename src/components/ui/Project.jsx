import { React, useState } from "react";

const Project = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`project ${isOpen ? "is--open" : ""}`}>
			<div
				className="project__title"
				style={props.titleStyle}
				onClick={() => {
					isOpen ? setIsOpen(false) : setIsOpen(true);
				}}
			>
				{props.title}
			</div>
			<div className="project__summary" style={props.bodyStyle}>
				{props.projectSummary}
			</div>
		</div>
	);
};

export default Project;
