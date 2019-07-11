import React, { useState, useEffect } from 'react'

const EditMemoForm = props => {
  const [memo, setMemo] = useState(props.currentMemo)

  const handleInputChange = event => {
    const { name, value } = event.target

    setMemo({ ...memo, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateMemo(memo.id, memo)
      }}
    >
      <label>category</label>
      <input type="text" name="category" value={memo.category} onChange={handleInputChange} />

      <label>content</label>
      <input type="text" name="content" value={memo.content} onChange={handleInputChange} />

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}

export default EditMemoForm
