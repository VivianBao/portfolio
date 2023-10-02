import { React, useLayoutEffect } from "react"
import { useLocation } from 'react-router-dom'
import '../../styles/ProjectPage.scss'
import { icons } from "../../data"

export default function ProjectPage() {
  const location = useLocation()
  const { projectData } = location.state
  const iconElements = projectData.tags.map(tag => {
    return(
      <i className={`devicon-${icons[0][tag]}`} key={tag}></i>
    )
  })
  const projectContent = projectData.features?.map(feature => {
    return(
      <div className="content-container">
        <h3>{feature.sub_title}</h3>
        <h5>{feature.description}</h5>
      </div>
    )
  })

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return(
    <>
    <div className="project-landing-container">
      <div className="left-container">
        <div className="left-landing-container">
          <div className="preview-container">
            <div className={`${projectData.img[0].type === "desktop" ? "photo-desktop" : "photo-mobile"}`} style={{
                  backgroundImage: projectData.img[0].url
                }}></div>
          </div>
          <div className="title-container">
            <h2>{projectData.title}</h2>
            <h3>{projectData.sub_title}</h3>
          </div>
          <div className="icons">
            {iconElements}
          </div>
        </div>
        <div className="features-container">
          <h2>Features</h2>
          {projectContent}
        </div>
      </div>
      <div className="right-container">
        <div className="introduction-container">
          <h2>Introduction</h2>
          <div className="content-container">
            <h5>{projectData.story}</h5>
          </div>
        </div>
      {projectData.title === "Kikoemas+" ? (
        <div className="video-container" >
          <h3>Product Pitch</h3>
          <iframe width="672" height="378" src="https://www.youtube.com/embed/OP88DtltO2Y?si=bBWxfzcUB036Vke1&amp;start=953&end=1392" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ):(
        <></>
      )}
      </div>
    </div>
    </>
  )
};
