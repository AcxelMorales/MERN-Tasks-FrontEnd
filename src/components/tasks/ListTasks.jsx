import React, { Fragment } from 'react'

import Task from './Tasks'

const ListTasks = () => {
  const tasks = [
    { name: 'Elegir tecnologias', status: true },
    { name: 'Elegir colores', status: false },
    { name: 'Métodos de pago', status: true },
    { name: 'Base de datos', status: false }
  ]

  return (
    <Fragment>
      <h2>Proyecto: Tienda virtual</h2>
      <ul className="listado-tareas">
        {tasks.length === 0
          ? (<li className="tarea"> <p>No hay tareas</p> </li>)
          : tasks.map(task => (
            <Task task={task} />
          ))
        }
        <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
      </ul>
    </Fragment>
  )
}

export default ListTasks
