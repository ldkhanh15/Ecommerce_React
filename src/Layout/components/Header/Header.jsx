import useWindowDimensions from '@/hooks/useWindowDimensions '
import React, { useState } from 'react'
import Info from './Info/Info'
import HeaderMobile from './Mobile/HeaderMobile'
import NavBar from './NavBar/NavBar'
import Search from './Search/Search'

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 768 && <HeaderMobile />}
      {width > 768 &&
        <>
          <Info />
          <Search />
          <NavBar />
        </>
      }
    </>
  )
}

export default Header