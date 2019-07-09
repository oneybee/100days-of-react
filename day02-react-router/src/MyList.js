import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import List1 from './List1'
import List2 from './List2'
import './index.css'

const MyList = () => {
  return (
    <div>
      <h2>My Lsit</h2>
      <Router>
        <Link to="/List1" className="listWrap">
          List1
        </Link>
        <Link to="/List2" className="listWrap">
          List2
        </Link>

        <Route path="/List1" component={List1} />
        <Route path="/List2" component={List2} />
      </Router>
    </div>
  )
}

export default MyList
