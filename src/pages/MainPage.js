import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddApplicationForm from '../components/AddApplicationForm';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <AddApplicationForm />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
