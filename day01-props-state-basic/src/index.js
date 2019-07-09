import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyComponent from './MyComponent'
import MyNumber from './MyNumber'

/*
 using const
 */
const Index = () => {
  return (
    <div>
      <div className="props-wrap">
        <h2>Using Props</h2>
        {/* <MyComponent /> */}
        <MyComponent value="3000" />
      </div>

      <div className="state-wrap">
        <h2>Using State</h2>
        <MyNumber />
      </div>
    </div>
  )
}

MyComponent.defaultProps = {
  value: '100',
}

ReactDOM.render(<Index />, document.getElementById('root'))
