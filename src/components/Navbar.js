import React, { useState } from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

export default function Navbar() {
  return (
    <>
      <Nav activeKey="/home">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/areas" className="nav-link">
            Areas
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
