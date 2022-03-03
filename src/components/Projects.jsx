import {useState, useEffect} from "react"
import "../styles/Projects.scss";
import Project from "./Project"
import ProjectList from "./ProjectList"
import {
  featuredProjects, railsProjects, reactProjects
} from "../data"

export default function Projects() {
  const [selected, setSelected] = useState('featured')
  const [projectsData, setProjectsData] = useState(settingProjectsData)

  function settingProjectsData() {
    switch (selected) {
      case "featured":{
        return featuredProjects
      }

      case "rails":{
        return railsProjects
      }

      case "react":{
        return reactProjects
      }

      default: {
        return featuredProjects
      }
    }
  }

  function handleSelect(id) {
    setSelected(id)
  }

  const projectElements = projectsData.map(projectData => {
    return(
      <Project key={projectData.id} projectData={projectData}/>
    )
  })

  return (
    <div className="project-index-container" id="projects">
      <h2>Projects</h2>
      <ProjectList
      selected={selected}
      handleSelect={handleSelect} />
      <div className="project-cards-container">
        {projectElements}
      </div>
    </div>
  )
}
