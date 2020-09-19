import React from "react";
import "./App.css";
import Navigation from "../Navigation";
import Transaction from "../Transaction";
import Dashboard from "../Dashboard";
import Setting from "../Setting";
import Account from "../Account";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Transaction />
      <Dashboard />
      <Setting />
      <Account />
    </div>
  );
}

export default App;
