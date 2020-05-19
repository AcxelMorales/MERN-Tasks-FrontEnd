import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import CreateAccount from './components/auth/CreateAccount'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  )
}

export default App