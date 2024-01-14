import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
const cx=classNames.bind(styles)
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={cx('children')}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout