import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../styles/devices.css";

export default function Project({projectData, icons}) {

  const iconElements = projectData.tags.map(tag => {
    return(
      <i className={`devicon-${icons[0][tag]}`} key={tag}></i>
    )
  })

  return (
    <div className="project-card">
      <div className="photo" style={{
        backgroundImage: projectData.img
      }}></div>
      <div className="project-card-info">
        <h3>{projectData.title}</h3>
        <p>Back-end Lead</p>
        <div className="icons">
          {iconElements}
        </div>
      </div>
    </div>
  )
}
