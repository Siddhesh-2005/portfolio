import React from "react";
import { HashRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";      
import Contact from "../pages/Contact";
function HashRouter1() {
  return (
    <div>
      <span className="sid-logo">Sid.</span>
      <HashRouter>
        <nav>
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-active" : undefined}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : undefined}>About</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-active" : undefined}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-active" : undefined}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : undefined}>Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default HashRouter1;
