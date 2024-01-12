import React from "react";

import EducationItem from "../ui/EducationItem";

const FavoriteResources = () => {
  return (
    <div className="section">
      <div className="section__title">Favorite Resources</div>
      <div className="section__content">
        <p>
          To learn DevOps and fullstack development, I've used a variety of
          resources. These are some of the key resources I've utilized.
        </p>
        <EducationItem
          source="Udemy/Pluralsight"
          details={
            <div>
              <div className="education__item__titla">
                Introductory JavaScript Course - 27 hours -{" "}
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
                C# Fundamentals and ASP.NET Core 6 Web API Fundamentals - 15
                hours
              </div>
              <div className="education__item__description">
                These introductory courses provided a starting point with C#
                that allowed me to better troubleshoot code as a DevOps
                Administrator. It also provided enough foundation to begin
                utilizing C# to create simple applciations to solve problems.
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
                TechWorld with Nana -{" "}
                <a
                  href="https://www.youtube.com/@TechWorldwithNana"
                  target="_Blank"
                  rel="noreferrer"
                  className="inline_link"
                >
                  View Channel
                </a>
              </div>
              <div className="education__item__description">
                TechWorld with Nana dives directly into popular DevOps tools and
                provides overviews. Her videos are simple to follow, yet
                technical enough to dive right into using new tools.
              </div>
              <div className="education__item__titla">
                NetworkChuck -{" "}
                <a
                  href="https://www.youtube.com/@NetworkChuck"
                  target="_Blank"
                  rel="noreferrer"
                  className="inline_link"
                >
                  View Channel
                </a>
              </div>
              <div className="education__item__description">
                NetworkChuck provides a variety of instructional videos that
                cover networking, cybersecurity, and system administration. His
                simple explanations make learning new concepts quite
                straightforard.
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default FavoriteResources;
