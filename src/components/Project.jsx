import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project() {
  return (
    <div className="project-card">
      <div className="photo" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/project_test.png'})`
      }}></div>
      <h5>Quizzical</h5>
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
