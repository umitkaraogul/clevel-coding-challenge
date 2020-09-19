import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="Navigation">
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/transaction">Transaction</Link>
      </li>
      <li>
        <Link to="/accounts">Accounts</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </div>
);
