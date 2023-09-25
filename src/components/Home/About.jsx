import React from "react"
import '../../styles/About.scss'

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about--brown-block">
        <div className="blocks-container">
          {/* <img className="triangle" src="/triangle.png" alt="triangle" /> */}
          <h2>About</h2>
          <h5 className="white-block">My name is Wei An, and I'm a full-stack web developer who's passionate about analyzing problems and finding solutions.<br/><br/>
            I was born and raised in Taiwan, and now living in Tokyo, Japan.<br/><br/>
            I focused my studies on languages and cultures when I was in Waseda University, and then continued discovering programming languages after graduation and found myself enchanted.<br/><br/>
            I proceeded with my journey by joining the full-time coding program at Le Wagon, Tokyo.<br/><br/>
            While being capable of working alone on projects, I particularly enjoy working in a team, in which you're allowed to look at things from different perspectives and learn from other people.
          </h5>
        </div>
        {/* <div className="transparent-block"></div> */}
      </div>
    </div>
  )
}
