import "../styles/Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <h4>Wei An Bow</h4>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}
