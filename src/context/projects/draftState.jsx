import React, { useReducer } from 'react'

import { v4 } from 'uuid'

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
    form: false,
    errorForm: false,
    draft: null
  }

  const [state, dispach] = useReducer(draftReducer, initialState)

  const showForm = () => {
    dispach({
      type: action.FORM_DRAFT
    })
  }

  const getProjects = () => {
    dispach({
      type: action.GET_PROJECTS,
      payload: projects
    })
  }

  const addDraft = draft => {
    draft.id = v4()

    dispach({
      type: action.ADD_DRAFT,
      payload: draft
    })
  }

  const showError = () => {
    dispach({
      type: action.VALID_FORM
    })
  }

  const actualProject = draftId => {
    dispach({
      type: action.ACTUAL_PROJECT,
      payload: draftId
    })
  }

  const deleteDraft = draftId => {
    dispach({
      type: action.DELETE_DRAFT,
      payload: draftId
    })
  }

  return (
    <draftContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        draft: state.draft,
        showForm,
        getProjects,
        addDraft,
        showError,
        actualProject,
        deleteDraft
      }}
    >
      {props.children}
    </draftContext.Provider>
  )
}

export default DraftState
