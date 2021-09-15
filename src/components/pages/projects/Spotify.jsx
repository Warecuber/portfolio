import { React } from "react";
import Project from "../../ui/Project";

const Spotify = () => {
	return (
		<Project
			title="Spotify Stats"
			titleStyle={{ backgroundColor: "#1db954" }}
			bodyStyle={{ backgroundColor: "#1db954" }}
			projectSummary={
				<div>
					<div className="project__links">
						<a
							href="https://github.com/Warecuber/SpotifyInfo"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Source code
						</a>
						<a
							href="https://warecuber.github.io/SpotifyInfo/"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Working Demo
						</a>
					</div>
					<p className="project__description">
						I created the Spotify Stats because I wanted to see my most popular
						songs/artists on Spotify, but did not want to authenticate to a 3rd
						party app. This project taught me how to use a public API with
						OAuth. It also helped with learning when to use Function
						Constructors and Prototypes.
					</p>
				</div>
			}
		/>
	);
};

export default Spotify;
