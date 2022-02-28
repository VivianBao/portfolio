import "../styles/Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div className="navbar">
      <h4>Bow.tw</h4>
      <div className="icons">
        <a href="#" target='_blank'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        <a href="https://github.com/VivianBao" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        <FontAwesomeIcon icon='bars' />
      </div>
    </div>
  )
}
