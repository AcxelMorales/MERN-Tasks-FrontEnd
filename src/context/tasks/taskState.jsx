import React, { useReducer } from 'react'

import { v4 } from 'uuid'

import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import * as action from '../../types'

const TaskSate = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Elegir tecnologias', status: true, draftId: 1 },
      { id: 2, name: 'Elegir colores', status: false, draftId: 2 },
      { id: 3, name: 'Métodos de pago', status: true, draftId: 3 },
      { id: 4, name: 'Base de datos', status: false, draftId: 1 },
      { id: 5, name: 'Elegir colores', status: false, draftId: 2 },
      { id: 6, name: 'Métodos de pago', status: true, draftId: 1 },
      { id: 7, name: 'Base de datos', status: false, draftId: 2 },
      { id: 8, name: 'Elegir colores', status: false, draftId: 1 },
      { id: 9, name: 'Métodos de pago', status: true, draftId: 3 },
      { id: 10, name: 'Base de datos', status: false, draftId: 1 },
      { id: 11, name: 'Base de datos', status: false, draftId: 1 }
    ],
    taskDraft: null,
    errorTask: false,
    selectTask: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasks = draftId => {
    dispatch({
      type: action.TASK_DRAFT,
      payload: draftId
    })
  }

  const addTask = task => {
    task.id = v4()

    dispatch({
      type: action.ADD_TASK,
      payload: task
    })
  }

  const updateTask = task => {
    dispatch({
      type: action.UPDATE_TASK,
      payload: task
    })
  }

  const deleteTask = id  => {
    dispatch({
      type: action.DELETE_TASK,
      payload: id
    })
  }

  const validTaks = () => {
    dispatch({
      type: action.VALID_TASK
    })
  }

  const changeStatusTask = task => {
    dispatch({
      type: action.STATUS_TASK,
      payload: task
    })
  }

  const saveCurrentTask = task => {
    dispatch({
      type: action.CURRENT_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskDraft: state.taskDraft,
        errorTask: state.errorTask,
        selectTask: state.selectTask,
        getTasks,
        addTask,
        validTaks,
        deleteTask,
        changeStatusTask,
        saveCurrentTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskSate
