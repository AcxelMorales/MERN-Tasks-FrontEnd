import React, { useReducer } from 'react'

import draftContext from './draftContext'
import draftReducer from './draftReducer'

import * as action from '../../types'

const DraftState = props => {
  const projects = [
    { id: 1, name: 'Tienda virtual' },
    { id: 2, name: 'OCR en Angular' },
    { id: 3, name: 'Red Social con Go y React' }
  ]

  const initialState = {
    projects: [],
    form: false
  }

  const [state, dispach] = useReducer(draftReducer, initialState)

  const showForm = () => dispach({ type: action.FORM_DRAFT })

  const getProjects = () => {
    dispach({
      type: action.GET_PROJECTS,
      payload: projects
    })
  }

  return (
    <draftContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </draftContext.Provider>
  )
}

export default DraftState
