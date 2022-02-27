import React from "react"
import "../styles/Contact.scss"

export default function Contact() {
  return(
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea placeholder="Message" name="message"/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
