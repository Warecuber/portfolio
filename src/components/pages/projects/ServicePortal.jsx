import { React } from "react";
import Project from "../../ui/Project";

const ServicePortal = () => {
  return (
    <Project
      title="Internal Service Portal"
      titleStyle={{ backgroundColor: "#64CCC9", color: "black" }}
      bodyStyle={{ backgroundColor: "#64CCC9", color: "black" }}
      tags={["ReactJS", "ExpressJS", "NodeJS"]}
      projectSummary={
        <div>
          <p className="project__description">
            I created and still maintain an internal IT Service Portal for my
            employer. The ticketing system did not have the needed frontend, so
            I created a ReactJS frontend and many dynamic forms for vairious
            departments.
            <br />
            <br />
            The service consists of a ReactJS frontend, ExpressJS API, and a
            MariaDB database. I maintain both the site and hosting server
            myself.
          </p>
        </div>
      }
    />
  );
};

export default ServicePortal;
