import React, { useState, useEffect } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/animatedLetters";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/images/UI-dashboard.png";
import "./project.scss";

import "./project.scss";
import Loader from "react-loaders";
const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(idTimeOut);
  }, []);
  return (
    <>
      <div className="container project-page">
        <div className="text-zone project_txt">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <div className="project">
            <Link
              to="https://react-adminui-dashboard.netlify.app/"
              target="_blank"
            >
              <div className="project_item">
                <img src={dashboardImage} alt="project_img" />
                <h5>Dashboard Admin</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Project;
