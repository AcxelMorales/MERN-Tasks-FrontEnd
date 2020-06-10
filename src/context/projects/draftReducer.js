import * as draftAct from '../../types'

export default (state, action) => {
  switch (action.type) {
    case draftAct.FORM_DRAFT:
      return {
        ...state,
        form: true
      }
    case draftAct.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case draftAct.ADD_DRAFT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false
      }
    case draftAct.VALID_FORM:
      return {
        ...state,
        errorForm: true
      }
    case draftAct.ACTUAL_PROJECT:
      return {
        ...state,
        draft: state.projects.filter(draft => draft.id === action.payload)
      }
    case draftAct.DELETE_DRAFT:
      return {
        ...state,
        projects: state.projects.filter(draft => draft.id !== action.payload),
        draft: null
      }
    default:
      return state
  }
}
