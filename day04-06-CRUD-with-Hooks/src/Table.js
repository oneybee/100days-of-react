import React, { Component, useState } from 'react'
import './index.css'

// class Table extends Component {
//   render(props) {
//     return (

const Table = props => (
  <table>
    <div className="tableIndex">
      <td className="tablePadding">Category</td>
      <td className="tablePadding">Content</td>
    </div>

    {props.memo.length > 0 ? (
      props.memo.map(memo => (
        <div key={memo.id}>
          <td className="tablePadding">
            {/* {this.props.category} */}
            {memo.category}
          </td>
          <td className="tablePadding">
            {/* {this.props.content} */}
            {memo.content}
          </td>
          <td className="tablePadding">
            <button>Edit</button>
            <button onClick={() => props.deleteMemo(memo.id)}>Delete</button>
          </td>
        </div>
      ))
    ) : (
      <div>
        <td>No users</td>
      </div>
    )}
  </table>
)

//     )
//   }
// }

export default Table
