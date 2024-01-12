import { React } from "react";
import Project from "../../ui/Project";

const Wedding = () => {
  return (
    <Project
      title="Wedding Website"
      titleStyle={{ backgroundColor: "#e7decd", color: "black" }}
      bodyStyle={{ backgroundColor: "#e7decd", color: "black" }}
      tags={["React", "Cloudflare"]}
      projectSummary={
        <div>
          <p className="project__description">
            While planning my wedding I was unable to locate a wedding website
            service that provided the customization and flexibility I wanted. My
            solution was to use ReactJS and Cloudflare to build a site and RSVP
            system. Updates are made simple with a CI/CD pipeline from my
            self-hosted Gitlab server.
            <br />
            <br />
            Everything in the application stack is hosted through Cloudflare,
            and it also utilizes Cloudflare Access for authentication.
          </p>
        </div>
      }
    />
  );
};

export default Wedding;
