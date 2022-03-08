import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <header>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} style={{textDecoration:"none", marginLeft:"5px", color:"black",fontSize:"25px",fontFamily:'Franklin Gothic Medium'}}>Home</Link>
            <Link to={"/add"} style={{textDecoration:"none",marginLeft:"5px", color:"black",fontSize:"25px",fontFamily:'Franklin Gothic Medium'}}>Add </Link>
            <Link to={"/edit"} style={{textDecoration:"none",marginLeft:"5px", color:"black",fontSize:"25px",fontFamily:'Franklin Gothic Medium'}}>Edit</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
