import React, { useContext, useState, useEffect } from 'react'

import draftContext from '../../context/projects/draftContext'
import taskContext from '../../context/tasks/taskContext'

const FormTasks = () => {
  const projectsContext = useContext(draftContext)
  const { draft } = projectsContext

  const tasksContext = useContext(taskContext)
  const { addTask, validTaks, errorTask, getTasks, selectTask, updateTask } = tasksContext

  const [task, setTask] = useState({
    name: ''
  })

  useEffect(() => {
    (selectTask !== null) ? setTask(selectTask) : setTask({ name: '' })
  }, [selectTask])

  if (!draft) return null

  const [actualProject] = draft

  const handleSubmit = evt => {
    evt.preventDefault()

    if (task.name.trim() === '') {
      validTaks()
      return
    }

    if (selectTask === null) {
      task.draftId = actualProject.id
      task.status = false
      addTask(task)
    } else {
      updateTask(task)
    }

    getTasks(actualProject.id)

    setTask({
      name: ''
    })
  }

  const handleChange = evt => {
    setTask({
      ...task,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <div className="formulario">
      <form
        onSubmit={handleSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="name"
            autoComplete="off"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={selectTask ? 'Editar Tarea' : 'Agregar tarea'}
          />
        </div>
      </form>

      {(errorTask) ? <p className="mensaje error">El nombre de la tarea es obligatorio.</p> : null}
    </div>
  );
}

export default FormTasks
