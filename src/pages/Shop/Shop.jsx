import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { thumbnail, color, condition, cate, product } from './data'
import NewProduct from '@/components/NewProduct/NewProduct'
import { BiCategory } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import Product from '@/components/Product/Product'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css';
import useScrollToTop from '@/hooks/useScrollToTop'
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar'
import { Helmet } from 'react-helmet'

const cx = classNames.bind(styles)

const Shop = ({shop}) => {
  useScrollToTop()
  const [con, setCon] = useState(0);
  let initState = [];
  // eslint-disable-next-line array-callback-return
  color.map((value, index) => {
    initState[index] = false;
  })
  const [col, setCol] = useState([initState]);
  const [state, setState] = useState({ min: 0, max: 100 })
  const handleCheckbox = (index) => {
    col[index] = !col[index];
    setCol([...col])
  }
  return (
    <div className={cx('container')}>
       <Helmet>
        <title>Product</title>
      </Helmet>
      <div className={cx('side-bar')}>
        <ProductSideBar shop={shop} color={color} thumbnail={thumbnail} cate={cate} condition={condition}/>
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
          {product.map((item) => (
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