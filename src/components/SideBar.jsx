import "../styles/SideBar.scss"

export default function SideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <a href="#landing">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projectindex">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
