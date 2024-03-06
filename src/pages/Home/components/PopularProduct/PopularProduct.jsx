import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Product from '@/components/Product/Product';
import { getProduct } from '@/services/productService';
const cx = classNames.bind(styles);
const PopularProduct = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      let res=await getProduct();
      setData(res.data)
    }
    getData()
  },[])
  console.log(data)
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3>Popular Products</h3>
        <ul>
          <li className={cx('active')}>All</li>
          <li>Featured</li>
          <li>Popular</li>
          <li>New added</li>
        </ul>
      </div>
      <div className={cx('product')}>
        {data && data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default PopularProduct