import React from "react";
import "./Header.css";

//import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav.Link href="/home">Florence Anipa</Nav.Link>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About me</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/newpost">Newpost</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
