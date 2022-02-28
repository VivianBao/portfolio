import "../styles/Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div className="navbar">
      <h4>Bow.tw</h4>
      <div className="icons">
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon='bars' />
      </div>
    </div>
  )
}
