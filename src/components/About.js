import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
     <p>I’m a passionate web developer who loves building creative and user-friendly interfaces.</p>
      <img src={image} alt="I made this" />
    About</div>;
}

export default About;
