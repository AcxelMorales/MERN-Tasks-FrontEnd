import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import CreateAccount from './components/auth/CreateAccount'
import Projects from './components/projects/Projects'
import DraftState from './context/projects/draftState'

function App() {
  return (
    <div className="App">
      <DraftState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </DraftState>
    </div>
  )
}

export default App
