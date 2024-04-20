import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import data from './data'
import Voucher from '@/components/Voucher/Voucher'
import { getVoucherProduct } from '@/services/voucherService'
const cx = classNames.bind(styles)
const MyVoucher = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getVoucherProduct();
      setData(res.data)
    }
    getData()
  }, [])
  const nest = {
    name: 'Nested',
    avatar: '/images/logo/logo.svg'
  }

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
          <div className={cx('list-voucher')}>
            {data.map((item, index) => (
              <Voucher key={index} data={item} shop={item.shop ? item.shop : nest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyVoucher