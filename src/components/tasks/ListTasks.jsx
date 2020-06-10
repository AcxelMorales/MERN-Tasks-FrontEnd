import React, { Fragment, useContext } from 'react'

import draftContext from '../../context/projects/draftContext'

import Task from './Tasks'

const ListTasks = () => {
  const projectsContext = useContext(draftContext)
  const { draft, deleteDraft } = projectsContext

  if (!draft) return <h2>Selecciona un proyecto</h2>

  const [actualProject] = draft

  const tasks = [
    { name: 'Elegir tecnologias', status: true },
    { name: 'Elegir colores', status: false },
    { name: 'Métodos de pago', status: true },
    { name: 'Base de datos', status: false }
  ]

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0
          ? (<li className="tarea"> <p>No hay tareas</p> </li>)
          : tasks.map(task => (
            <Task task={task} key={task.name} />
          ))
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
