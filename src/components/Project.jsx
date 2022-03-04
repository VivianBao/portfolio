import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project({projectData, icons}) {

  const iconElements = projectData.tags.map(tag => {
    return(
      <i className={`devicon-${icons[0][tag]}`} key={tag}></i>
    )
  })

  return (
    <div className="project-card">
      <div className="photo-container">
        <div className={`${projectData.img[0].type === "desktop" ? "photo-desktop" : "photo-mobile"}`} style={{
          backgroundImage: projectData.img[0].url
        }}></div>
      </div>
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
