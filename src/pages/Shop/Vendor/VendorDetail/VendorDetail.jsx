import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import useScrollToTop from '@/hooks/useScrollToTop'
import Shop from '../../Shop'
import { Helmet } from 'react-helmet'
import { getAllShopDetail } from '@/services/shopService'
import { useParams } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import ProductSideBar from '@/components/ProductSideBar/ProductSideBar'
import { FaSort } from 'react-icons/fa'
import Product from '@/components/Product/Product'
import { getCate } from '@/services/categoryService'
import { getSize } from '@/services/productService'
import {color,thumbnail} from './data'
const cx = classNames.bind(styles)

const VendorDetail = () => {
  useScrollToTop();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [cate, setCate] = useState([])
  const [size, setSize] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getAllShopDetail(id);
      let resCate = await getCate();
      let resSize=await getSize();
      setCate(resCate.data)
      setSize(resSize.data)
      setData(res.data)
    }
    getData();
  }, [])
  console.log(data);
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Car Toys</title>
      </Helmet>
      <div className={cx('side-bar')}>
        <ProductSideBar shop={data} color={color} thumbnail={thumbnail} cate={cate} condition={size} />
      </div>

      <div className={cx('main')}>
        <div className={cx('header')}>
          <div className={cx('left')}>
            We found <strong>{data?.product?.length}</strong> items for you
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
          {data?.product?.map((item) => (
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

export default VendorDetail