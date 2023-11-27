import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditApplicationForm from '../components/EditApplicationForm'

const EditPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <EditApplicationForm />
      </div>
      <Footer />
    </div>
  )
}

export default EditPage
