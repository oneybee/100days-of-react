import React, { Component, useState, useEffect } from 'react'
import './Item.css'

class Item extends Component {
  render() {
    return (
      <div>
        <div className="image-section">{this.props.itemName} </div>

        <div className="price">{this.props.price}</div>
      </div>
    )
  }
}

export default Item
