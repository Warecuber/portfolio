import { React } from "react";
import Project from "../../ui/Project";

const ServicePortal = () => {
	return (
		<Project
			title="Internal IT Service Portal"
			titleStyle={{ backgroundColor: "#64CCC9", color: "black" }}
			bodyStyle={{ backgroundColor: "#64CCC9", color: "black" }}
			tags={["ReactJS", "ExpressJS", "NodeJS"]}
			projectSummary={
				<div>
					<p className="project__description">
						I created and still maintain an internal IT Service Portal for my
						employer. Our ticketing system provided a basic skeleton form to
						submit a ticket, and I've taken that and created various templates
						with custom fields that fill a hidden description field before
						submitting. This allows the forms to have a custom style and custom
						fields while still utilizing the pre-generated form. I've written
						the majority of the code myself and it has expanded to include forms
						to send tickets to 4 other departments. I also manage the Linux
						servers (Oracle Linux 8), which consists of Nginx with a reverse
						proxy to allow 2 backend servers hosted at the same subdomain as the
						frontend. This portal is utilized by around 400 employees every day.
					</p>
				</div>
			}
		/>
	);
};

export default ServicePortal;
