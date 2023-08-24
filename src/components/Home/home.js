import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "./home.scss";
import Logo from "./Logo/logo";
import Loader from "react-loaders";
// import "../AnimatedLetters/animatedLetters.scss";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["r", "i", "n", "i", "v", "a", "s"];
  const jobArray = [
    "w",
    "e",
    "b",
    "",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  // useEffect(() => {
  //   return set(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 1000);
  // });
  // useEffect(() => {
  //   return setLetterClass("text-animate-hover");
  // }, []);
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(idTimeOut);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / UI Developer / JavaScript Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
