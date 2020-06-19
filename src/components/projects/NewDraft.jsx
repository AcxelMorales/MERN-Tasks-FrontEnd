import React, { Fragment, useState, useContext } from 'react'

import draftContext from '../../context/projects/draftContext'

const NewDraft = () => {
  const projectsContext = useContext(draftContext)
  const { form, errorForm, showForm, addDraft, showError } = projectsContext

  const [draft, setDraft] = useState({
    name: ''
  })

  const handleChange = evt => {
    setDraft({
      ...draft,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if (draft.name === '') {
      showError()
      return
    }

    addDraft(draft)
    setDraft({
      name: ''
    })
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        Nuevo proyecto
      </button>
      {form ?
        (
          <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-text"
              placeholder="Nombre del proyecto"
              name="name"
              autoComplete="off"
              value={draft.name}
              onChange={handleChange}
            />
            <input
              type="submit"
              className="btn btn-block btn-primario"
              value="Agregar proyecto"
            />
          </form>
        ) : null
      }

      {errorForm ? <p className="mensaje error ">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  )
}

export default NewDraft
