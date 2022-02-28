import './styles/App.scss';
import Home from "./components/Home"
import About from "./components/About"
import ProjectIndex from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faLinkedinIn, faGithub);

function App() {
  return (
    <div className="app">
      <Navbar/>
      <SideBar />
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
