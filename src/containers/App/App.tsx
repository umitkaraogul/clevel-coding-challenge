import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Transaction from "../Transaction";
import Dashboard from "../Dashboard";
import Setting from "../Setting";
import Account from "../Account";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/accounts" component={Account} />
          <Route path="/settings" component={Setting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
