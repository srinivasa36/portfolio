import React, { useState, useEffect } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/animatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./about.scss";
import Loader from "react-loaders";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(idTimeOut);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Srinivas, a passionate front-end developer with 1.3 years
            of experience in crafting captivating and user-friendly web
            experiences. I'm dedicated to bringing ideas to life through clean
            and elegant code, and I thrive on the constant evolution of the
            digital landscape.
          </p>
          <p>
            I specialize in HTML, CSS, JavaScript, and have hands-on experience
            with popular frameworks like React. By combining my technical skills
            with a deep understanding of user behavior, I aim to design and
            build interfaces that not only look stunning but also provide
            intuitive and delightful user experiences.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
