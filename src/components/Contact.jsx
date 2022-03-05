import React from "react"
import "../styles/Contact.scss"
import Footer from "./Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  const colorList = [["#B3B5AA", '90px'], ["#698B98", '130px'], ["#5A7581", '100px'], ["#2B3542", '75px']]
  const blockElements = colorList.map((set, index)=> {
    return(
      <div className={`block block-${index + 1}`} key={index} style={{backgroundColor: `${set[0]}`, height: `${set[1]}`}}></div>
    )
  })
  return(
    <div className="contact-container" id="contact">
      <div className="form-container">
        <div className="title">
          <div className="title-name"><h2>Contact</h2></div>
          <div className="blocks">
            {blockElements}
          </div>
        </div>
        <div className="form">
          <form action="https://getform.io/f/ab39537e-2971-46ed-9ea4-9a3cc8d9f14e" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea placeholder="Message" name="message"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/wei-an-bow-0610b1217/" target='_blank'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        <a href="https://github.com/VivianBao" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </div>
      <Footer />
    </div>
  )
}
