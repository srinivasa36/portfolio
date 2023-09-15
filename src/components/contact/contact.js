import "./contact.scss";
import React, { useState, useEffect, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(idTimeOut);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xfmcu59",
        "template_fk46jho",
        refForm.current,
        "mqk8RSgPB9VP6wT6k"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm actively looking for Front end developer roles.You can contact
            me by using below form.
          </p>
          <form className="contact-form" ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>

        <div className="map-wrap">
          <MapContainer center={[12.932648, 77.4853643]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.932648, 77.4853643]}>
              <Popup>
                Srinivas lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
          <div className="info-map">
            Srinivas A
            <br />
            India,
            <br />
            kengeri
            <br />
            Bengaluru
            <br />
            <span>iamsrinivas230@gmail.com</span>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
