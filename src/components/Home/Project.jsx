import React from "react"
import {Link} from "react-router-dom"
import ProjectPage from "../Project/ProjectPage"

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
      <div className="description">
        <h3>{projectData.title}</h3>
        <p className="content">{projectData.description}</p>
        <h5 className="roles">{projectData.roles}</h5>
        <div className="icons">
          {iconElements}
        </div>
        <div className="links">
          {/* { projectData.site && <a href={projectData.site} alt="site" target="_blank">View Site</a> } */}
          <a href={projectData.code} alt="code" target="_blank">View Code</a>
          <Link to={`/project/${projectData.id}`} state={{projectData: projectData}}>To project page</Link>
        </div>
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
