import "../../styles/SideBar.scss"

export default function SideBar(props) {
  return (
    <div className={"side-bar " + (props.openMenu && "active")}>
      <ul>
        <li>
          <a href="#landing">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
