import './styles/App.scss';
import Home from "./components/Home"
import About from "./components/About"
import ProjectIndex from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"

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
