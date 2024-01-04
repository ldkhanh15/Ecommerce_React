import React from 'react'
import Footer from '../components/Footer'
import Header from './Header'

const SpecialLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default SpecialLayout