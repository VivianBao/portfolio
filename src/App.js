import './styles/App.scss';
import Home from "./components/Home"
import About from "./components/About"
import ProjectIndex from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import {useState} from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, fab } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faLinkedinIn, faGithub, faAngleRight, fab);

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleClick() {
    setOpenMenu(prevValue => !prevValue)
  }

  return (
    <div className="app">
      <Navbar openMenu={openMenu} handleClick={handleClick}/>
      <SideBar openMenu={openMenu}/>
      <div className="sections">
        <Home />
        <About />
        <ProjectIndex />
        <Contact />
      </div>
    </div>
  )
}

export default App;
