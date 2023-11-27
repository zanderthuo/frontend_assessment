import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListAllApplications from '../components/ListAllApplications'

const AllApplicationsPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <ListAllApplications />
      </div>
      <Footer />
    </div>
  )
}

export default AllApplicationsPage
