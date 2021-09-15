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
				<EducationItem
					source="Creating production service portal"
					details="I created and still maintain an internal IT Service Portal for my employer. Our ticketing system provided a basic skeleton form to submit a ticket, and I've taken that and created various templates with custom fields that fill a hidden description field before submitting. This allows the forms to have a custom style and custom fields while still utilizing the pre-generated form. I've written the majority of the code myself and it has expanded to include forms to send tickets to 4 other departments. I also have configured the Nginx settings with a reverse proxy to allow 2 backend servers hosted at the same subdomain as the frontend. This portal is utilized by around 400 employees every day."
				/>
			</div>
		</div>
	);
};

export default Education;
