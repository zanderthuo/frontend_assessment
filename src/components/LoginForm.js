import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { login } from "../redux/actions/authActions";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });

  const isLoading = useSelector((state) => state.auth.loading);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    const loginData = {
      username,
      password,
    };

    if (!isLoading) {
      await dispatch(login(loginData));
      toast.success("User Logged in successfully!");

      // Redirect only when not loading
      if (!isLoading) {
        history.push('/');
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit(handleLogin)}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    {...register('username', { required: 'This Field is Required' })}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <Form.Text className="text-danger">
                      {errors.username.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    {...register('password', { required: 'This Field is Required' })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <ToastContainer />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
