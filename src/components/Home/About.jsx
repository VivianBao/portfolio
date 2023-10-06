import React from "react"
import '../../styles/About.scss'
import { icons } from "../../data"

export default function About() {
  const techStackArray = Object.keys(icons[0]);
  const techStackElement = techStackArray.map(tag => {
    return(
      <div>
        <i className={`devicon-${icons[0][tag]}`} key={tag}></i>
        <span>{tag}</span>
      </div>
    )
  })
  return (
    <div className="about-container" id="about">
        <div className="blocks-container">
          <div className="brown-block">
            <h2>About</h2>
          </div>
          <div className="white-block">
            <h5>My name is Bow Wei An, and I was born and raised in Taiwan. I moved to Japan to attend Waseda University where I focused my study on language and culture in School of International Liberal Study. After graduation, I found an interest in programming and thus decided to pursue a career as a developer. <br/><br/>
              I then joined the Full-Stack Developer course in <span><a href="https://www.lewagon.com/tokyo" target="_blanck">Le Wagon Tokyo</a></span> where I learned not only how to write codes but also work in a team to develop projects using Ruby on Rails.<br/><br/>
              After <span><a href="https://youtu.be/OP88DtltO2Y?si=Br_1Q7NgM_QMTk0Q" target="_blanck">pitching our final product</a></span> and earning my <span><a href="http://app.mamoru.earth/en/" target="_blank">certificate</a></span>, I continued on the self-learning journey. Later, I became part of the <span><a href="https://www.mamoru.earth/" target="_blank">Mamoru project</a></span> that is dedicated to promoting sustainable shops in Japan at Gochiso Inc. as a front-end developer working with React.js in a team of around 15 people. <br/><br/>
            </h5>
          </div>
          <div className="skills-container">
            <div className="language-skills-container">
              <h3>Langauge Skills</h3>
              <div className="language-container">
                <div>
                  <h4>Mandarin</h4>
                  <h5>Mother Tongue</h5>
                </div>
                <div>
                  <h4>English</h4>
                  <h5>TOEIC: 990/990</h5>
                  <h5>TOEFL iBT: 109/120</h5>
                </div>
                <div>
                  <h4>Japanese</h4>
                  <h5>N1</h5>
                </div>
              </div>

            </div>
            <div className="tech-stack-container">
              <h3>Tech Stack</h3>
              <div className="language-container">
                {techStackElement}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
