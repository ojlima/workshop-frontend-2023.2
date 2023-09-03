import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="fixed-top ">
            <LinkContainer to="/">
                <Navbar.Brand className="ml-auto">
                <img
                    src="/public/img/star-wars-logo-4.png" // Certifique-se de que a URL está correta
                    alt="Star Wars Logo"
                    className="navbar-logo"
                />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{ width: "100%", justifyContent: "center" }}>
                <LinkContainer to="/">
                    <Nav.Link className='custom-link'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/personagens">
                    <Nav.Link className='custom-link'>Personagens</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}