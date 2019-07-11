import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './Table'
import AddMemoForm from './AddMemoForm'
import EditMemoForm from './EditMemoForm'

const Index = props => {
  const memosData = [{ id: 1, category: 'todo', content: 'hair cut' }, { id: 2, category: 'meeting', content: 'with tom' }]

  const [memos, setMemos] = useState(memosData)

  const addMemo = memo => {
    memo.id = memos.length + 1
    setMemos([...memos, memo])
  }

  const deleteMemo = id => {
    setMemos(memos.filter(memo => memo.id !== id))
  }

  // edit
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, category: '', content: '' }

  const [currentMemo, setCurrentMemo] = useState(initialFormState)

  const editMemo = memo => {
    setEditing(true)

    setCurrentMemo({ id: memo.id, category: memo.category, content: memo.content })
  }

  const updateMemo = (id, updatedMemo) => {
    setEditing(false)

    setMemos(memos.map(memo => (memo.id === id ? updatedMemo : memo)))
  }

  return (
    <div>
      <h1>Memo app with React Hooks</h1>

      {editing ? (
        <div>
          <h2 className="header">Edit memo</h2>

          <EditMemoForm
            editing={editing}
            setEditing={setEditing}
            currentMemo={currentMemo}
            updateMemo={updateMemo}
            //
          />
        </div>
      ) : (
        <div>
          <h2 className="header">Add memo</h2>
          <AddMemoForm addMemo={addMemo} />
        </div>
      )}
      <br />
      <h2 className="header">Memo list</h2>
      <Table
        memo={memos}
        deleteMemo={deleteMemo}
        editMemo={editMemo}
        //  category={category} content={content}
      />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
