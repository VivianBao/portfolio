import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project({projectData}) {
  return (
    <div className="project-card">
      <div className="photo" style={{
        backgroundImage: projectData.img
      }}></div>
      <h5>{projectData.title}</h5>
      {/* <p>A fun quiz app to test your knowledge in various fields</p> */}
      <div className="icons">
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
        <FontAwesomeIcon icon={['fab', 'js']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
        <FontAwesomeIcon icon={['fab', 'sass']} />
      </div>
    </div>
  )
}
