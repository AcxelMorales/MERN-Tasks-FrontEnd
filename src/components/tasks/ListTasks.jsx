import React, { Fragment, useContext } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import draftContext from '../../context/projects/draftContext'
import taskContext from '../../context/tasks/taskContext'

import Task from './Tasks'

const ListTasks = () => {
  const projectsContext = useContext(draftContext)
  const { draft, deleteDraft } = projectsContext

  const tasksContext = useContext(taskContext)
  const { taskDraft } = tasksContext

  if (!draft) return <h2>Selecciona un proyecto</h2>

  const [actualProject] = draft

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {taskDraft.length === 0
          ? (<li className="tarea"> <p>No hay tareas</p> </li>)
          :
          <TransitionGroup>
            {taskDraft.map(task => (
              <CSSTransition
                key={task.id}
                classNames="tarea"
                timeout={500}
              >
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => deleteDraft(actualProject.id)}
        >Eliminar proyecto &times;
        </button>
      </ul>
    </Fragment>
  )
}

export default ListTasks
