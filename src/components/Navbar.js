import React, { useState } from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <NavDropdown title="Areas" id="basic-nav-dropdown">
          <Link to="/areas/klo-creek" className="dropdown-item">
            KLO Creek
          </Link>
          {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <Link to="/areas" className="dropdown-item">
            All Areas
          </Link>
        </NavDropdown>
      </Nav>
    </>
  );
}
