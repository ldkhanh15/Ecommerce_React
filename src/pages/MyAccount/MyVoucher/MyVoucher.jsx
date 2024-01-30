import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import data from './data'
import Voucher from '@/components/Voucher/Voucher'
const cx = classNames.bind(styles)
const MyVoucher = () => {
  const [type,setType]=useState(1)
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>My Voucher</title>
      </Helmet>
      <div className={cx('main')}>
        <h1>My Voucher</h1>
        <div className={cx('header')}>
          <label htmlFor="input">
            Add voucher
          </label>
          <input type="text" placeholder='Please enter voucher code...' />
          <div className={cx('btn')}>
            <Button small outline>Redeem</Button>
          </div>
        </div>
        <div className={cx('voucher')}>
          <div className={cx('type')}>
            <div onClick={()=>setType(1)} className={type===1 ? cx(['item','active']) : cx('item')}>
              All(100)
            </div>
            <div onClick={()=>setType(2)} className={type===2 ? cx(['item','active']) : cx('item')}>
              Nest(80)
            </div>
            <div onClick={()=>setType(3)} className={type===3 ? cx(['item','active']) : cx('item')}>
              Vendor(20)
            </div>
          </div>
          <div className={cx('list-voucher')}>
            {data.map((item, index) => (
              <Voucher key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyVoucher