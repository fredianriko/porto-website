import React from "react";
import "./intro.scss";
import { useTypewriter } from "react-simple-typewriter";

export default function Intro() {
  // typing effect
  const { text } = useTypewriter({
    words: ["Developer", "Designer", "Content Creator", "Gamer"],
    loop: false,
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Fredi Anriko</h1>
          <h3>
            Freelance
            <span>{" " + text}</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
