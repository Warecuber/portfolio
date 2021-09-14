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
							href="https://warecuber.github.io/SpotifyInfo/"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Working Demo
						</a>
						<a
							href="https://github.com/Warecuber/SpotifyInfo"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Source code
						</a>
					</div>
					<p className="project__description">
						I created the Spotify Stats because I wanted to see my most popular
						songs/artists on Spotify, but did not want to aothenticate to a 3rd
						party app. This was also my first project using OAuth.
					</p>
				</div>
			}
		/>
	);
};

export default Spotify;
