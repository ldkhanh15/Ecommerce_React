import React, { useEffect, useState } from 'react'
import FlashSale from './FlashSale'
import Category from './Category'
import SuggestProduct from '../Product/SuggestProduct'
import Introduce from './Introduce'
import DetailCate from './Category/DetailCate'
import Banner from './Banner'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
const cx=classNames.bind(styles)
const Home = () => {

  return (
    <div className={cx('container')}>
      <Banner />
      <Category />
      <FlashSale />
      <SuggestProduct />
      <Introduce />
      <DetailCate />
    </div>
  )
}

export default Home