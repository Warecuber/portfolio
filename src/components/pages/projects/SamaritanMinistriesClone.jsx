import { React } from "react";
import Project from "../../ui/Project";

import SMINeedsImg from "./img/smi_needs.png";
import SMIMembersImg from "./img/smi_members.png";

const SamaritanMinistriesClone = () => {
  return (
    <Project
      title="Samaritan Ministries Clone"
      titleStyle={{ backgroundColor: "#595478", color: "white" }}
      bodyStyle={{ backgroundColor: "#595478", color: "white" }}
      tags={["ReactJS", "MySQL", "Docker"]}
      projectSummary={
        <div>
          <p className="project__description">
            This project was to rebuild a proof of concept of the Samaritan
            Ministries legacy web application from the ground up with a newer
            style.
            <br />
            <br />
            The frontend is ReactJS and Redux, the backend consists of multiple
            ExpressJS servers for microservices, and the database is MySQL. In
            the final state of this project there were 3 environments with
            everything running in containers within K3s.
          </p>
          <img
            src={SMINeedsImg}
            alt="Samaritan clone Needs page"
            className="project__img"
          />
          <img
            src={SMIMembersImg}
            alt="Samaritan clone Member page"
            className="project__img"
          />
        </div>
      }
    />
  );
};

export default SamaritanMinistriesClone;
