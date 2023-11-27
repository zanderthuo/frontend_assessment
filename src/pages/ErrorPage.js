import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ErrorPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        error page
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
