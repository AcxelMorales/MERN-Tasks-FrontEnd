import React, { useContext } from 'react'

import draftContext from '../../context/projects/draftContext'

const Draft = ({ draft }) => {
  const projectsContext = useContext(draftContext)
  const { actualProject } = projectsContext

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => actualProject(draft.id)}
      >
        {draft.name}
      </button>
    </li>
  )
}

export default Draft
