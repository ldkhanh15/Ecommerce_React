import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const DefaultLayout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default DefaultLayout