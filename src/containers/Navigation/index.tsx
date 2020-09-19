import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => (
  <Nav className="flex-column">
    <Nav.Link eventKey="link-1" as={Link} to="/">
      Dashboard
    </Nav.Link>
    <Nav.Link eventKey="link-2" as={Link} to="/transaction">
      Transactions
    </Nav.Link>
    <Nav.Link eventKey="link-3" as={Link} to="/accounts">
      Accounts
    </Nav.Link>
    <Nav.Link eventKey="link-4" as={Link} to="/settings">
      Settings
    </Nav.Link>
  </Nav>
);
