import "../styles/Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(props) {

  return (
    <div className={"navbar " + (props.openMenu && "active")}>
      <div className="logo"><a href="#home">Bow.tw</a></div>
      <div className="icons">
        <FontAwesomeIcon icon='angle-right' onClick={props.handleClick} className="exit"/>
        <a href="#" target='_blank'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        <a href="https://github.com/VivianBao" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        {/* <FontAwesomeIcon icon='bars' onClick={props.handleClick} /> */}
        <div className="hamburger" onClick={props.handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  )
}
