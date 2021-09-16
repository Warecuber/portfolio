import { React, useState } from "react";

const Project = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const tags = props.tags || [""];

	return (
		<div className={`project ${isOpen ? "is--open" : ""}`}>
			<div className="">
				<div
					className="project__title__container flex mobile--column"
					style={props.titleStyle}
					onClick={() => {
						isOpen ? setIsOpen(false) : setIsOpen(true);
					}}
				>
					<span className="project__title">{props.title}</span>
					<div className="project__tags">
						{tags.map((tag) => (
							<span className="project__tag" key={tag}>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="project__summary" style={props.bodyStyle}>
				{props.projectSummary}
			</div>
		</div>
	);
};

export default Project;
