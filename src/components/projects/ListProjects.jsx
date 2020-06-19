import React, { useContext, useEffect } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import draftContext from '../../context/projects/draftContext'

import Draft from './Draft'

const ListProjects = () => {
  const projectsContext = useContext(draftContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    getProjects()

    //eslint-disable-next-line
  }, []) // se agrego como dependencia, pero se tiene que checar

  if (projects.length === 0) return <p className="mensaje info">No hay proyectos, comienza creando uno</p>

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(draft => (
          <CSSTransition
            key={draft.id}
            classNames="proyecto"
            timeout={500}
          >
            <Draft draft={draft} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default ListProjects
