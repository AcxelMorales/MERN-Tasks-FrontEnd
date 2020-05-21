import React, { useContext, useEffect } from 'react'

import draftContext from '../../context/projects/draftContext'

import Draft from './Draft'

const ListProjects = () => {
  const projectsContext = useContext(draftContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    getProjects()
  }, [getProjects]) // se agrego como dependencia, pero se tiene que checar

  if (projects.length === 0) return null

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
