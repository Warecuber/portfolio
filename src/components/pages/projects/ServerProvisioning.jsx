import { React } from "react";
import Project from "../../ui/Project";

import awx_workflow from "./img/awx_workflow.png";
import awx_survey from "./img/awx_survey.png";

const ServerProvisioning = () => {
  return (
    <Project
      title="Automated Server Provisioning"
      titleStyle={{ backgroundColor: "#ee0000", color: "white" }}
      bodyStyle={{ backgroundColor: "#ee0000", color: "white" }}
      tags={["Linux", "Ansible"]}
      projectSummary={
        <div>
          <div className="project__links"></div>
          <p className="project__description">
            To streamline the process of spinning up new servers in my home lab,
            I setup an Ansible automation workflow in AWX. It consists of 24
            total nodes to allow flexibility based on what is required of the
            server.
            <img
              src={awx_workflow}
              alt="AWX server build workflow"
              className="project__img"
            />
            It's complete with a survey in the AWX GUI to allow simple
            customization of server resources, OS, hostname, and even installed
            services. I paired it with a similar job to remove a server from all
            applicable resources. This significantly decreased the time and work
            required to create a new machine.
            <img
              src={awx_survey}
              alt="AWX server build survey"
              className="project__img"
            />
          </p>
        </div>
      }
    />
  );
};

export default ServerProvisioning;
