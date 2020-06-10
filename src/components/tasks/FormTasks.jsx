import React, { useContext } from 'react'

import draftContext from '../../context/projects/draftContext'

const FormTasks = () => {
  const projectsContext = useContext(draftContext)
  const { draft } = projectsContext

  if (!draft) return null

  const [actualProject] = draft

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="name"
            autoComplete="off"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Agregar tarea"
            />
        </div>
      </form>
    </div>
  );
}

export default FormTasks
