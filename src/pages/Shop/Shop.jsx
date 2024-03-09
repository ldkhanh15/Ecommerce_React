import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { thumbnail, color, condition, cate } from './data'
import { BiCategory } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import Product from '@/components/Product/Product'
import 'react-input-range/lib/css/index.css';
import useScrollToTop from '@/hooks/useScrollToTop'
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar'
import { Helmet } from 'react-helmet'
import { getProduct, getSize } from '@/services/productService';
import { getCate } from '@/services/categoryService';

const cx = classNames.bind(styles)

const Shop = ({ shop }) => {
  useScrollToTop()
  const [data, setData] = useState([])
  const [cate, setCate] = useState([])
  const [size, setSize] = useState([])

  useEffect(() => {
    const getData = async () => {
      let resProduct = await getProduct();
      let resCate = await getCate();
      let resSize=await getSize();
      setData(resProduct.data)
      setCate(resCate.data)
      setSize(resSize.data)
    } 
    getData()
  }, [])
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <div className={cx('side-bar')}>
        <ProductSideBar shop={shop} color={color} thumbnail={thumbnail} cate={cate} condition={size} />
      </div>

      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('left')}>
            We found <strong>21</strong> items for you
          </div>
          <div className={cx('right')}>
            <div className={cx('show')}>
              <div className={cx('content')}>
                <BiCategory className={cx('icon')} />
                <div className={cx('text')}>
                  Show:
                </div>
              </div>
              <select name="show" id="">
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
              </select>
            </div>
            <div className={cx('show')}>
              <div className={cx('content')}>
                <FaSort className={cx('icon')} />
                <div className={cx('text')}>
                  Sort by:
                </div>
                <select name="sort" id="">
                  <option value="">Default</option>
                  <option value="">Ascending</option>
                  <option value="">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('product')}>
          {data.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
        <div className={cx('navigation')}>
          <ul>
            <li className={cx('active')}>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>51</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shop