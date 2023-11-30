import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
