import React, { Component, useState, useEffect } from 'react'
import './App.css'
import Item from './Item'
// import axios from 'axios'

// e600784123014d489c796ab72ed9587d

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
}

function App() {
  useEffect(async () => {
    var season = ['https://api.football-data.org/v2/competitions/PD/scorers?season=2017', 'https://api.football-data.org/v2/competitions/PD/scorers?season=2018']

    const response1 = await fetch(season[0], obj)
    const response2 = await fetch(season[1], obj)

    var data1 = await response1.json()
    var data2 = await response2.json()

    console.log(data1)
    console.log(data2)
  }, [])

  return (
    <div
    // onClick={() => {
    //   setState('sss')
    // }}
    >
      load data
    </div>
  )
}

Item.defaultProps = {
  itemName: '100',
}

export default App
