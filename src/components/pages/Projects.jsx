import React, { useState } from "react";
import upComingProject from "../../assets/upcomingProject.jpg";

function Projects() {
  return (
    <div className="projects">
      <p className="projectHeading">Mini Projects</p>
      


<div className="projectContainer">
        <iframe src="https://codesandbox.io/embed/5n47k6?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1"
     style={{
            width: "50%",
            height: "500px",
            border: 0,
            borderRadius: "20px",
            overflow: "hidden",
            minWidth: "570px",
          }}
     title="Noted"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        <div className="projectInfo">
          <p className="projectTitle">Noted</p>
          <p className="projectTech">React</p>
          <p className="projectDescription">
            Noted is a simple and intuitive note-taking application that allows
            users to create, edit, and delete notes with ease. Built using
            React, it offers a clean interface for organizing thoughts and
            ideas. The app stores notes locally in the browser, ensuring your
            data persists across sessions without the need for an account or
            internet connection.
          </p>
        </div>
      </div>

      <p className="projectHeading">Major Projects</p>
      <div className="projectContainer">
        <img src={upComingProject} alt="" />
        <div className="projectInfo">
          <p className="projectTitle">QuietDesk</p>
          <p className="projectTech">React, Node.js, PostgreSQL, Auth</p>
          <p className="projectDescription">
            QuietDesk is an anonymous, student-focused web platform designed
            to create a safe and judgment-free space where students can share
            their campus experiences, stories, struggles, and opinions without
            revealing their identities. Inspired by platforms like Blind, this
            site aims to build a supportive community within educational
            institutions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;
