import * as taskAct from '../../types'

export default (state, action) => {
  switch (action.type) {
    case taskAct.TASK_DRAFT:
      return {
        ...state,
        taskDraft: state.tasks.filter(task => task.draftId === action.payload)
      }
    case taskAct.ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTask: false
      }
    case taskAct.VALID_TASK:
      return {
        ...state,
        errorTask: true
      }
    case taskAct.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case taskAct.UPDATE_TASK:
    case taskAct.STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
        selectTask: null
      }
    case taskAct.CURRENT_TASK:
      return {
        ...state,
        selectTask: action.payload
      }
    default:
      return state
  }
}
