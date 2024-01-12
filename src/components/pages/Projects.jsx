import React from "react";

// import projects
import Spotify from "./projects/Spotify";
import CubeTimer from "./projects/CubeTimer";
import ToDoApp from "./projects/ToDoApp";
import SamaritanMinistriesClone from "./projects/SamaritanMinistriesClone";
import ServicePortal from "./projects/ServicePortal";
import Wedding from "./projects/Wedding";
import ServerProvisioning from "./projects/ServerProvisioning";

const Projects = () => {
  return (
    <div className="section">
      <div className="section__title">Projects</div>
      <div className="section__content">
        <ServerProvisioning />
        <Wedding />
        <ServicePortal />
        <Spotify />
        <CubeTimer />
        <ToDoApp />
        <SamaritanMinistriesClone />
      </div>
    </div>
  );
};

export default Projects;
