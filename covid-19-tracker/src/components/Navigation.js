import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import "./style.css";

const Navigation = () => (
  <>
    <Navbar expand="lg">
      <Navbar.Brand href="#home">COVID-19 INFO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#links">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Navigation;
