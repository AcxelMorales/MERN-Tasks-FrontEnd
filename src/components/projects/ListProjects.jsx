import React, { useContext, useEffect } from 'react'

import draftContext from '../../context/projects/draftContext'

import Draft from './Draft'

const ListProjects = () => {
  const projectsContext = useContext(draftContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    getProjects()
  }, []) // se agrego como dependencia, pero se tiene que checar

  if (projects.length === 0) return <p className="mensaje info">No hay proyectos, comienza creando uno</p>

  return (
    <ul className="listado-proyectos">
      {projects.map(draft => (
        <Draft
          key={draft.id}
          draft={draft}
        />
      ))}
    </ul>
  )
}

export default ListProjects
