import React from "react"
import "../styles/Contact.scss"

export default function Contact() {
  const colorList = [["$gray", '103'], ["$light-blue", '152'], ["$blue", '117'], ["dark-blue", '84']]
  const blockElements = colorList.map((set, index)=> {
    return(
      <div className={`block block-${index + 1}`} style={{backgroundColor: `${set[0]}`, height: `${set[1]}`}}></div>
    )
  })
  return(
    <div className="contact-container">
      <div className="form-container">
        <div className="title">
          <h2>Contact</h2>
          <div className="blocks">
            {blockElements}
          </div>
        </div>
        <div className="form">
          <form>
            <label htmlFor="email">Name</label>
            <input type="text" placeholder="Name" name="Name" />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea placeholder="Message" name="message"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
