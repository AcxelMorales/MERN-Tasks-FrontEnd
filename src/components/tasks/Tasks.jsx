import React, { useContext } from 'react'

import taskContext from '../../context/tasks/taskContext'
import draftContext from '../../context/projects/draftContext'

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext)
  const { deleteTask, getTasks, changeStatusTask, saveCurrentTask } = tasksContext

  const projectsContext = useContext(draftContext)
  const { draft } = projectsContext

  const deleteTsk = id => {
    deleteTask(id)
    getTasks(draft[0].id)
  }

  const changeStatus = task => {
    (task.status) ? task.status = false : task.status = true
    changeStatusTask(task)
  }

  const selectTaks = task => {
    saveCurrentTask(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status
          ?
          (
            <button
              type="button"
              className="completo"
              onClick={() => changeStatus(task)}
            >
              Completo
            </button>
          )
          :
          (
            <button
              type="button"
              className="incompleto"
              onClick={() => changeStatus(task)}
            >
              Incompleto
            </button>
          )
        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTaks(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTsk(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Task
