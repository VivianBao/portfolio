import {useState} from "react"
import "../styles/Projects.scss";
import Project from "./Project"
import ProjectList from "./ProjectList"

export default function Projects() {
  const [selected, setSelected] = useState('featured')

  function handleSelect(id) {
    setSelected(id)
    console.log("Clicked!")
  }

  return (
    <div className="project-index-container" id="projects">
      <h2>Projects</h2>
      <ProjectList selected={selected} handleSelect={handleSelect}/>
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
