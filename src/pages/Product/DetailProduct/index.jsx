import React from 'react'
import styles from './DetailProduct.module.scss'
import classNames from 'classnames/bind'
import ShopInfo from './ShopInfo'
import ProductInfo from './ProductInfo'
import HotPick from './HotPick'
import ProductRating from './Rating'
import SameShopProduct from './SameShopProduct'
import RelativeProduct from '../components/RelativeProduct'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)
const DetailProduct = () => {

  const params = useParams();
  console.log(params);

  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        Main info
      </div>
      <ShopInfo />
      <div className={cx('content')}>
        <div className={cx('left')}>
          <ProductInfo />
          <ProductRating/>
          <SameShopProduct/>
          <RelativeProduct/>
        </div>
        <div className={cx('right')}>
          <HotPick/>
        </div>
      </div>

    </div>
  )
}

export default DetailProduct