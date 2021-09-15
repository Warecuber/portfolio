import React from "react";

import EducationItem from "../ui/EducationItem";

const Education = () => {
	return (
		<div className="section">
			<div className="section__title">Education</div>
			<div className="section__content">
				<p>To learn fullstack development, I've used a variety of resources.</p>
				<EducationItem
					source="Udemy"
					details="Various Udemy courses, including a JavaScript intro course, a 27
						hour JavaScript class, and a 15 hour React Native class which I am currently finishing."
				/>
				<EducationItem
					source="YouTube"
					details="I've followed various tutorials to learn about ExpressJS, ElectronJS, password hashing, using json web tokens for authentication, and ReactJS"
				/>
			</div>
		</div>
	);
};

export default Education;
