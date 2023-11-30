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
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isLoggedIn && ( // Only show the Applications Nav.Link if user is logged in
            <Nav className="me-auto">
              <Nav.Link href="/all-application">Applications</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isLoggedIn ? ( // Conditionally render Sign Out button if user is logged in
              <Button variant="outline-light" onClick={handleSignout}>
                Sign Out
              </Button>
            ) : (
              <Button variant="outline-light" href="/login"> {/* Show Sign In button if not logged in */}
                Sign In
              </Button>
            )}
          </Navbar.Text>
          {isLoggedIn && ( // Show username if user is logged in
            <Navbar.Text>
              Signed in as: <a href="#login">{username}</a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
