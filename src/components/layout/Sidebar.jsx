import React from 'react'

import NewDraft from '../projects/NewDraft'
import ListProjects from '../projects/ListProjects'

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN <span>Tasks</span> </h1>
      <NewDraft />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListProjects />
      </div>
    </aside>
  )
}

export default Sidebar
