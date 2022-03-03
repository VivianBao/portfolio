export default function ProjectList({selected,handleSelect}) {
  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'rails',
      title: 'Ruby on Rails'
    },
    {
      id: 'react',
      title: 'React'
    }
  ]

  const listElement = list.map(item => {
    return(
      <div onClick={() => handleSelect(item.id)} className={`project-list-item ${selected === item.id ? "active" : ""}`} key={item.id}>
        <h5>{item.title}</h5>
      </div>
    )
  })

  return(
    <div className="filter">
      {listElement}
    </div>
  )
}
