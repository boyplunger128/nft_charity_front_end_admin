import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact >
      </Switch>
    </Router>
    <>This is app</>;
    )
}

export default App;