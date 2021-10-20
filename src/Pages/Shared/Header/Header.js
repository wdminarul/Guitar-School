import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/logo-two.png"
import "./Header.css"

const Header = () => {
const {user,logOut}= useAuth()
const history =useHistory()
const back=()=>{
  history.push("/home")
}
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark"  sticky="top">
  <Container>
  <Navbar.Brand href="#home" onclick={back}><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      {user?.email ?
                            <Button onClick={logOut} variant="light">Logout </Button> :
                            <Nav.Link as={Link} to="/login">Login </Nav.Link>}
                        <Navbar.Text className="">
                            Profile: <a href="#login"  className="text-warning profile-name">{user?.displayName}</a>
                        </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;