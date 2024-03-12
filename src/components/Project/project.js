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
            <Link
              to="https://recipe-app-responsive.netlify.app/"
              target="_blank"
            >
              <div className="project_item">
                <img
                  src="https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="project_img"
                />
                <h5>Recipe App</h5>
              </div>
            </Link>
            <Link
              to="https://general-weather-forecast-app.netlify.app/"
              target="_blank"
            >
              <div className="project_item">
                <img
                  src="https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="project_img"
                />
                <h5>Weather Forecast</h5>
              </div>
            </Link>
            <Link
              to="https://task-manager-spa-react.netlify.app/"
              target="_blank"
            >
              <div className="project_item">
                <img
                  src="https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg"
                  alt="project_img"
                />
                <h5>Task Manager</h5>
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
