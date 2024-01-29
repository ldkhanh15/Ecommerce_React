import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import useScrollToTop from '@/hooks/useScrollToTop'
import Shop from '../../Shop'
import { Helmet } from 'react-helmet'
const cx = classNames.bind(styles)

const VendorDetail = () => {
  useScrollToTop();

  return (
    <div className={cx('container')}>
       <Helmet>
        <title>Car Toys</title>
      </Helmet>
      <Shop shop={true}/>
    </div>
  )
}

export default VendorDetail