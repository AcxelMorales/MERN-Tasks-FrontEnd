import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import CreateAccount from './components/auth/CreateAccount'
import Projects from './components/projects/Projects'

import DraftState from './context/projects/draftState'
import TaskState from './context/tasks/taskState'

function App() {
  return (
    <div className="App">
      <DraftState>
        <TaskState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/create-account" component={CreateAccount} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </TaskState>
      </DraftState>
    </div>
  )
}

export default App
