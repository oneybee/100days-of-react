import React, { useState } from 'react'

const AddMemoForm = props => {
  const initialFormState = { id: null, category: '', content: '' }
  const [addMemo, setAddMemo] = useState(initialFormState)

  const InputChange = event => {
    const { name, value } = event.target

    setAddMemo({ ...addMemo, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!addMemo.category || !addMemo.content) return

        props.addMemo(addMemo)
        setAddMemo(initialFormState)
      }}
    >
      <label>category</label>
      <input type="text" name="category" value={addMemo.category} onChange={InputChange} />
      <label>content</label>
      <input type="text" name="content" value={addMemo.content} onChange={InputChange} />
      <button>Add new memo</button>
    </form>
  )
}

export default AddMemoForm
