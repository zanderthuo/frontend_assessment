import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isLoggedIn && (
            <Nav className="me-auto">
              <Nav.Link href="/all-application">Applications</Nav.Link>
            </Nav>
          )}
          <Nav className="ms-auto">
            <Navbar.Text>
              {isLoggedIn ? (
                <Button variant="outline-light" onClick={handleSignout}>
                  Sign Out
                </Button>
              ) : (
                <Button variant="outline-light" href="/login">
                  Sign In
                </Button>
              )}
            </Navbar.Text>
            {isLoggedIn && (
              <Navbar.Text>
                Signed in as: <a href="#login">{username}</a>
              </Navbar.Text>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
