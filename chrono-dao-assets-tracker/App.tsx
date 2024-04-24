import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import IndexPopup from "./IndexPopup"
import FullScreenPage from "./src/pages/FullScreenPage"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/full-screen" component={FullScreenPage} />
        <Route path="/" component={IndexPopup} />
      </Switch>
    </Router>
  )
}

export default App
