import Landing from "./Landing"
import About from "./About"
import ProjectIndex from "./Projects"
import Contact from "./Contact"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import { useState } from "react"

export default function HomePage() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleClick() {
    setOpenMenu(prevValue => !prevValue)
  }

  return (
    <div className="app">
      <Navbar openMenu={openMenu} handleClick={handleClick}/>
      <SideBar openMenu={openMenu}/>
      <div className="sections">
        <Landing />
        <About />
        <ProjectIndex />
        <Contact />
      </div>
    </div>
  )
}
