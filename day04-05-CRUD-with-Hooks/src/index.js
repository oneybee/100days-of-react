import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './Table'
import AddMemoForm from './AddMemoForm'

const Index = props => {
  const memosData = [{ id: 1, category: 'todo', content: 'hair cut' }, { id: 2, category: 'meeting', content: 'with tom' }]

  const [memos, setMemos] = useState(memosData)

  const addMemo = memo => {
    memo.id = memos.length + 1
    setMemos([...memos, memo])
  }

  return (
    <div>
      <h1>CRUD app with React Hooks</h1>

      <h2 className="header">Add memo</h2>
      <AddMemoForm addMemo={addMemo} />

      <br />
      <h2 className="header">Memo table</h2>
      <Table
        memo={memos}
        //  category={category} content={content}
      />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
