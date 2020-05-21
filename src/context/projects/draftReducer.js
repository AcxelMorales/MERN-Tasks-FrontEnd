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
      default:
        return state
  }
}
