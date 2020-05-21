import React from 'react'

const Draft = ({ draft }) => {
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
      >
        {draft.name}
      </button>
    </li>
  )
}

export default Draft
