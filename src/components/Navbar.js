import React from 'react';
import {Container,Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navbarr(props) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Coctails APP</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link active as={Link} to="/search">Search</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navbarr;