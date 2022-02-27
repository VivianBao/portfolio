import React from "react"
// import Intro from "./Intro"
import '../styles/Landing.scss';

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="landing--brown-block">
          <div className="text">
            <div className="name">
              <h1>Wei An</h1>
              <h1>Bow</h1>
            </div>
            <h4>Vivian -She/Her-</h4>
            <h3>Software Engineer</h3>
            <h3>Full Stack Web Developer</h3>
            <h5>Ruby on Rails | HTML | CSS | Javascript | React</h5>
          </div>
          <div className="blue-block"></div>
          <div className="dark-blue-block"></div>
          <div className="profile-pic" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/profile.png'})`
          }}></div>
        </div>
      </div>

    </>
  )
}
