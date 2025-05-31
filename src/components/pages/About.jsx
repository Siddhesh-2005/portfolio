import React, { useState } from "react";

function About() {
  return (
    <div className="about">
      <div className="aboutME">
        <p className="aboutMeHeading">About Me</p>
        <p className="aboutMePara">
          I am Siddhesh, a Full-Stack Web Developer with a passion for creating dynamic
          and responsive web applications.I am currently pursuing <span className="aboutSpan"> BE in IT from SIES Graduate School Of Technology (Nerul,Navi Mumbai)</span>. I have experience in both front-end
          and back-end development, and I enjoy working on projects that
          challenge my skills and allow me to learn new technologies.
        </p>
        <p>

        </p>
        <table>
          <tr>
            <td>Name:</td>
            <td>Siddhesh Deepak Bagde</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>20</td>
          </tr>
          <tr>
            <td>College:</td>
            <td>SIES Graduate School of Technology</td>
          </tr>
          <tr>
            <td>Brach:</td>
            <td>Information Technology</td>
          </tr>
          <tr>
            <td>Languages:</td>
            <td>Marathi, English, Hindi</td>
          </tr>
        </table>
      </div>
      <div className="experience">
        <p className="experienceHeading">Experience</p>
        <div className="experienceCard">
          <p className="designation">Design Volunteer</p>
        <p className="institute">IETE SIES </p>
        <p className="period">2024-2025</p>
        </div>
        
      </div>
    </div>
  );
}
export default About;
