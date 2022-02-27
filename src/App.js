import './styles/App.scss';
import Landing from "./components/Landing"
import About from "./components/About"
import ProjectIndex from "./components/ProjectIndex"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Landing />
        <About />
        <ProjectIndex />
        <Contact />
        <SideBar/>
      </div>
    </div>
  )
}

export default App;
