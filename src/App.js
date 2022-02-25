import './styles/App.scss';
import Landing from "./components/Landing"
import ProjectIndex from "./components/ProjectIndex"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <div className="content">
          <Landing />
          {/* <ProjectIndex />
          <Contact /> */}
        </div>
        <div className="side-bar">
          <SideBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
