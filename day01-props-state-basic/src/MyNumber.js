import React, { Component } from 'react'

class MyNumber extends Component {
  state = {
    number: 0,
  }

  Increase = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  Decrease = () => {
    this.setState({
      number: this.state.number - 1,
    })
  }

  render() {
    return (
      <div>
        <div>number count: {this.state.number}</div>

        <br />
        <button onClick={this.Decrease}>-</button>
        <button onClick={this.Increase}>+</button>
      </div>
    )
  }
}

export default MyNumber
