import { React, useLayoutEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import '../../styles/ProjectPage.scss'
import { icons } from "../../data"
import ImageGallery from "react-image-gallery";
import Navbar from "../Home/Navbar"

export default function ProjectPage() {
  const location = useLocation()
  const { projectData } = location.state
  const [openMenu, setOpenMenu] = useState(false)
  function handleClick() {
    setOpenMenu(prevValue => !prevValue)
  }
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

  const images = projectData.img_gallery?.map(img => {
    return(
      {
        original: img.url,
        originalHeight: img.type === "desktop" ? 700 : 600,
      }
    )
  })

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return(
    <>
    <Navbar openMenu={openMenu} handleClick={handleClick}/>
    <div className="project-landing-container">
      <div className={`${projectData.img[0].type === "desktop" ?
                      "photo-desktop-top-container top-container"
                      : "photo-mobile-top-container top-container"}`}>
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
        <div className="introduction-container">
          <div className="introduction-title">
            <h2>Introduction</h2>
            <a href={projectData.code} alt="code" target="_blank">View Code</a>
          </div>
          <div className="content-container">
            <h5>{projectData.story}</h5>
          </div>
          {projectData.team ? (
            <>
              <h3>Team Members</h3>
              <div className="team-container">
                {projectData.team.map(member => {
                  return(
                    <div>
                      <h5>{member}</h5>
                    </div>
                  )
                  })}
              </div>
            </>

          ):(<></>)}
        </div>
      </div>
      <div className="bottom-container">
        <div className="features-container">
          <h2>Features</h2>
          {projectContent}
        </div>
      {projectData.title === "Kikoemas+" ? (
        <div className="video-container" >
          <h3>Product Pitch on Demo Day</h3>
          <iframe width="672" height="378" src="https://www.youtube.com/embed/OP88DtltO2Y?si=bBWxfzcUB036Vke1&amp;start=953&end=1392" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ):(
          <ImageGallery
            items={images}
            showBullets={true}
            showThumbnails={false}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
           />
      )}
      </div>
    </div>
    </>
  )
};
