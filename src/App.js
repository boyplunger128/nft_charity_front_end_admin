import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import admin_home from "./pages/admin/admin_home";
import campaign from "./pages/admin/campaign";
import auction from "./pages/admin/auction";
import list_nft from "./pages/admin/list_nft";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={admin_home} />
        <Route path="/admin/campaign" exact component={campaign} />
        <Route path="/admin/auction" exact component={auction} />
        <Route path="/admin/list_nft" exact component={list_nft} />
      </Switch>
    </Router>
  );
}

export default App;
