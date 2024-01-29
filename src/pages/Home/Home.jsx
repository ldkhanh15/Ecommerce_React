import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Statistical from './components/Statistical/Statistical';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import PopularProduct from './components/PopularProduct/PopularProduct';
import BestSale from './components/BestSale/BestSale';
import DealToday from './components/DealToday/DealToday';
import useScrollToTop from '@/hooks/useScrollToTop';
import ModalProduct from '@/components/ModalProduct/ModalProduct';
import { Helmet } from 'react-helmet';

const cx=classNames.bind(styles);
const Home = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Nest: For Fresh Life</title>
      </Helmet>
      <Banner/>
      <Category/>
      <PopularProduct/>
      <BestSale/>
      <DealToday/>
      <Statistical/>
    </div>
  )
}

export default Home