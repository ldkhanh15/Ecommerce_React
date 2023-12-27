import React from 'react'
import Footer from '../DefaultLayout/Footer'
import Header from './Header'

const SpecialLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default SpecialLayout