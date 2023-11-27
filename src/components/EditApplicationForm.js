import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const EditApplicationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sector, setSector] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); // State for terms agreement

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform Register logic here
    console.log('Logging in with:', username, password, sector, agreeTerms);
    // You can add further logic like sending Register data to a server or handling authentication
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">Edit Your Application Here</h2>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Application</Card.Title>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicSector" className="mb-4">
                  <Form.Label>Select Sector</Form.Label>
                  <Form.Select size="lg">
                    <option onChange={(e) => setSector(e.target.value)}>Large select</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditApplicationForm;
