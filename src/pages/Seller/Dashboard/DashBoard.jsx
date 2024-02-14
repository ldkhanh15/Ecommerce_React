import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Statistic from '../components/Statistic/Statistic';
import Shopping from '../components/Shopping/Shopping';
import Sale from '../components/Sales/Sales';
import Order from '../components/Orders/Orders';
import Analytic from '../components/Analytic/Analytic';
import Button from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
const cx = classNames.bind(styles)

const DashBoard = () => {

  return (
    <section className={cx('container')}>
      <Navbar />
      <div className={cx('main')}>
        <div className={cx('left')}>
          <Statistic />
          <Sale />
          <Order />
        </div>
        <div className={cx('right')}>
          <Analytic />
          <Shopping />
          <Button primary large>Add Product</Button>
        </div>
      </div>
    </section>
  )
}

export default DashBoard