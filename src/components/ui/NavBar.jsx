import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // State variables
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  // Functions
  const determineIfIsMobile = (size) => {
    if (size < 720 && !isMobile) {
      setIsMobile(true);
    } else if (size > 720 && isMobile) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    determineIfIsMobile(window.innerWidth);
  });

  window.addEventListener("resize", (e) => {
    determineIfIsMobile(e.target.innerWidth);
  });

  return (
    <div className="header">
      <div className="header__title">John Ware</div>
      {isMobile ? (
        <div className={mobileNavIsOpen ? "is--open" : ""}>
          <div
            className="hamburgerMenu"
            onClick={() => {
              mobileNavIsOpen
                ? setMobileNavIsOpen(false)
                : setMobileNavIsOpen(true);
            }}
          >
            <div className="menuRow row__top"></div>
            <div className="menuRow row__middle"></div>
            <div className="menuRow row__bottom"></div>
          </div>
          <div className="mobile__nav">
            <div className="mobile__nav__contents">
              <Link
                to="/"
                className="header__button"
                onClick={() => {
                  setMobileNavIsOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="header__button"
                onClick={() => {
                  setMobileNavIsOpen(false);
                }}
              >
                Projects
              </Link>
              <Link
                to="/favorite_resources"
                className="header__button"
                onClick={() => {
                  setMobileNavIsOpen(false);
                }}
              >
                Favorite Resources
              </Link>
              <a
                href="https://github.com/warecuber"
                target="_blank"
                className="header__button"
                rel="noreferrer"
                onClick={() => {
                  setMobileNavIsOpen(false);
                }}
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__button_container">
          <Link to="/" className="header__button">
            Home
          </Link>
          <Link to="/projects" className="header__button">
            Projects
          </Link>
          <Link to="/favorite_resources" className="header__button">
            Favorite Resources
          </Link>
          <a
            href="https://github.com/warecuber"
            target="_blank"
            className="header__button"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
