import React from "react"
import "../styles/Projects.scss";
import Project from "./Project"

export default function Projects() {
  return (
    <div className="project-index-container" id="projects">
      <h2>Projects</h2>
      <div className="filter">
        <h5>Featured</h5>
        <h5>Ruby on Rails</h5>
        <h5>React</h5>
      </div>
      <div className="project-cards-container">
        <Project/>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
