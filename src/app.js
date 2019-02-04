import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './styles'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="content">
            {/* <Route path="/" component={ Login } /> */}
          </div>
        </Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))