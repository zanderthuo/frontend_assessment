import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <p className="mb-0 text-center text-md-left">
              © {new Date().getFullYear()} Your Website
            </p>
          </Col>
          <Col xs={12} md={6}>
            <ul className="list-inline text-center text-md-right mb-0">
              <li className="list-inline-item">
                <a href="#home" className="text-light">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#about" className="text-light">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#contact" className="text-light">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
