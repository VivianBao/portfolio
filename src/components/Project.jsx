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
      <div className="photo" style={{
        backgroundImage: projectData.img
      }}></div>
      <h5>{projectData.title}</h5>
      {/* <p>A fun quiz app to test your knowledge in various fields</p> */}
      <div className="icons">
        {iconElements}
      </div>
    </div>
  )
}
