import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function sayHi(person) {
  const name = person.name
  setTimeout(() => {
    alert('Hello, ' + name)
    // 'Hello' + name
  }, 3000)
}

let someone = { name: 'Dan' }
sayHi(someone)

someone = { name: 'B' }
sayHi(someone)

function Counter() {
  const [time, setTime] = useState(0)
  const [step, setStep] = useState(10)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(c => c + step)
    }, 1000)
    return () => clearInterval(id)
  }, [step])

  return (
    <div>
      <h1>{time}</h1>
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    </div>
  )
}

function Index() {
  // Declare a new state variable, which we'll call "count"

  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banana 🍌')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    setTimeout(() => {
      console.log(`You clicked ${count} times`)
    }, 3000)
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count)
    }, 3000)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button onClick={handleAlertClick}>Show alert</button>

      <p>I like {fruit}</p>
      <button onClick={() => setFruit('peach!! 🍑')}>Change fruit</button>

      <Counter />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
