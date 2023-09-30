import './styles/App.scss';
// import Landing from "./components/Landing"
// import About from "./components/About"
// import ProjectIndex from "./components/Projects"
// import Contact from "./components/Contact"
// import Navbar from "./components/Navbar"
// import SideBar from "./components/SideBar"
import HomePage from "./components/Home/HomePage"
import ProjectPage from "./components/Project/ProjectPage"
import {Routes, Route} from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, fab } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faLinkedinIn, faGithub, faAngleRight, fab);

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  )
}

export default App;
