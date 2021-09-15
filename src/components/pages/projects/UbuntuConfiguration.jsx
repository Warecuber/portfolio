import { React } from "react";
import Project from "../../ui/Project";

const UbuntuConfiguration = () => {
	return (
		<Project
			title="Ubuntu Configuration"
			titleStyle={{ backgroundColor: "#E95420", color: "white" }}
			bodyStyle={{ backgroundColor: "#E95420", color: "white" }}
			tags={["Bash", "Linux"]}
			projectSummary={
				<div>
					<div className="project__links">
						<a
							href="https://github.com/Warecuber/Ubuntu-Configure"
							target="_Blank"
							rel="noreferrer"
							className="demo_link"
						>
							Source code
						</a>
					</div>
					<p className="project__description">
						The purpose of this project was to automate my standard setup of a
						fresh Ubuntu Server install. It installs my most frequently used
						packages, updates and upgrades existing packages, configures SSH
						server settings, enables firewall and allows SSH port, and even you
						to interactively configure a static IP.
					</p>
				</div>
			}
		/>
	);
};

export default UbuntuConfiguration;
