import React, { useContext } from 'react'

import draftContext from '../../context/projects/draftContext'
import taskContext from '../../context/tasks/taskContext'

const Draft = ({ draft }) => {
  const projectsContext = useContext(draftContext)
  const { actualProject } = projectsContext

  const tasksContext = useContext(taskContext)
  const { getTasks } = tasksContext

  const selectDraft = id => {
    actualProject(id)
    getTasks(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectDraft(draft.id)}
      >
        {draft.name}
      </button>
    </li>
  )
}

export default Draft
