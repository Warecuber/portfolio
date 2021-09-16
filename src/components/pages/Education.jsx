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
					details={
						<div>
							<div className="education__item__titla">
								27-hour introductory JavaScript Course -{" "}
								<a
									href="https://www.udemy.com/course/the-complete-javascript-course-legacy/"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Course
								</a>
							</div>
							<div className="education__item__description">
								This course provided a foundation to JavaScript, including ES5,
								ES6, and some newer syntax.
							</div>
							<div className="education__item__titla">
								15-hour introduction to React Native -{" "}
								<a
									href="https://www.udemy.com/course/build-full-stack-react-native-apps-with-expressjs-backend/"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Course
								</a>
							</div>
							<div className="education__item__description">
								Obot, the instructor, provided a great foundation of NodeJS and
								real-world examples of features to create a complete React
								Native app. I am currently at about 65% completion of this
								course.
							</div>
						</div>
					}
				/>
				<EducationItem
					source="YouTube"
					details={
						<div>
							<div className="education__item__titla">
								Dev Ed -{" "}
								<a
									href="https://www.youtube.com/c/DevEd"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Channel
								</a>
							</div>
							<div className="education__item__description">
								I've followed many of Dev Ed's tutorials to learn ReactJS, API
								creation, and MongoDB. His humor helps keep the viewer's
								attention while still being informative.
							</div>
							<div className="education__item__titla">
								Fireship -{" "}
								<a
									href="https://www.youtube.com/c/Fireship"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Channel
								</a>
							</div>
							<div className="education__item__description">
								Fireship makes informative and concise videos with the "100
								seconds" series. It's a great way to get exposed to new concepts
								in a short time period.
							</div>
							<div className="education__item__titla">
								Kevin Powell -{" "}
								<a
									href="https://www.youtube.com/kepowob"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Channel
								</a>
							</div>
							<div className="education__item__description">
								Kevin makes great videos about CSS, including a CSS battle video
								where he competes with other developers on YouTube, similar to
								code golf.
							</div>
							<div className="education__item__titla">
								The Coding Train -{" "}
								<a
									href="https://www.youtube.com/c/TheCodingTrain/videos"
									target="_Blank"
									rel="noreferrer"
									className="inline_link"
								>
									View Channel
								</a>
							</div>
							<div className="education__item__description">
								Daniel Shiffman's passion about programming is very clear in his
								videos. He is highly energetic, but explains coding concepts in
								a simple and understandable manner.
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default Education;
