import { React } from "react";

const EducationItem = (props) => {
	return (
		<div className="education__item">
			<div className="education__title">{props.source}</div>
			<div className="education__details">{props.details}</div>
		</div>
	);
};

export default EducationItem;
