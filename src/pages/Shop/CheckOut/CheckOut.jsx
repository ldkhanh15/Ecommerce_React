import useScrollToTop from '@/hooks/useScrollToTop'
import React from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)

const CheckOut = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
       <Helmet>
        <title>Check Out</title>
      </Helmet>
      CheckOut
      
    </div>
  )
}

export default CheckOut