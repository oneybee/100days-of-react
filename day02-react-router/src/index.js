import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyWork from './MyWork'
import MyList from './MyList'

/*
 using class
 */
class Index extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="routerWrap">
            <div className="linkWrap">
              <Link to="/" className="linkStyle">
                Home
              </Link>
              <Link to="/MyWork" className="linkStyle">
                MyWork page
              </Link>
              <Link to="/MyList" className="linkStyle">
                MyList
              </Link>
            </div>
          </div>
          <div>This is simple SPA(single page app)</div>

          <br />
          <br />

          <Route path="/MyWork" component={MyWork} />
          <Route path="/MyList" component={MyList} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
