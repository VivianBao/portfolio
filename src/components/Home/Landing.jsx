import React from "react"
// import Intro from "./Intro"
import '../../styles/Home.scss';

export default function Landing() {
  return (
    <>
      <div className="landing-container" id="landing">
        <div className="landing--brown-block">
          <div className="text">
            <div className="name">
              <h2>包維安</h2>
              <h3>Bow Wei An</h3>
              <h4>Vivian Bow</h4>
            </div>
            <div>
              <h3>Full Stack Web Developer</h3>
              <h5>Ruby on Rails | HTML | CSS | Javascript | React</h5>
            </div>
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
