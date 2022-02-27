import React from "react"
import '../styles/About.scss'

export default function About() {
  return (
    <div className="about-container">
      <div className="about--brown-block">
        <div className="white-block">
          <img className="triangle" src="/triangle.png" alt="triangle" />
          <h2>About</h2>
          <h5>My name is Wei An, and I'm a full stack web developer who's passaionate at analzing problems and find the solutions.<br/><br/>
            I'm born and raised in Taiwan, and now living in Tokyo, Japan.<br/><br/>
            I focused my studies on languages and cultures when I was in Waseda University, and then continued discovoring programming languages after graduation and found myself enchanted.<br/><br/>
            I proceeded my journey by joining the full-time coding programme at Le Wagon, Tokyo.<br/><br/>
            While being capable of working alone on projects, I particularly enjoy working in a team, in which you're given the opportunity to look at things from different perspectives and learn from other people.
          </h5>
        </div>
      </div>
    </div>
  )
}
