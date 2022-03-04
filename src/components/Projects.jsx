import {useState, useEffect} from "react"
import "../styles/Projects.scss";
import "../styles/devices.scss";
import Project from "./Project"
import ProjectList from "./ProjectList"
import {
  icons, featuredProjects, railsProjects, reactProjects
} from "../data"

export default function Projects() {
  const [selected, setSelected] = useState('featured')
  const [projectsData, setProjectsData] = useState(featuredProjects)

  useEffect(() => {
    if(selected === "featured"){
      setProjectsData(featuredProjects)
    }else if(selected === "rails"){
      setProjectsData(railsProjects)
    }else{
      setProjectsData(reactProjects)
    }
  }, [selected])

  function handleSelect(id) {
    setSelected(id)
  }

  const projectElements = projectsData.map(projectData => {
    return(
      <Project key={projectData.id} projectData={projectData} icons={icons}/>
    )
  })

  return (
    <div className="project-index-container" id="projects">
      <h2>Projects</h2>
      <ProjectList
        selected={selected}
        handleSelect={handleSelect}
      />
      <div className="project-cards-container">
        {projectElements}
      </div>
      {/* <div className="device-container">
        <div className="device device-macbook-pro">
          <div className="device-frame">
            <img className="device-content" src={process.env.PUBLIC_URL + '/kikoemas.png'} />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div> */}
    </div>
  )
}
