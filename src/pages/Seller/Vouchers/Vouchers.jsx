import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import Voucher from '@/components/Voucher/Voucher'
import { getVoucherOfShop } from '@/services/voucherService'
const cx = classNames.bind(styles)
const Vouchers = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let res = await getVoucherOfShop(1);
      setData(res.data)
    }
    getData()
  }, [])
  console.log(data);
  return (
    <div className={cx('container')}>
      <h1>Vouchers</h1>
      <div className={cx('header')}>
        <div className={cx('left')}>
          <input type="text" placeholder='Search a voucher' />
          <CiSearch className={cx('icon')} />
        </div>
        <div className={cx('right')}>
          <Button primary large>Add new voucher</Button>
        </div>
      </div>
      {data && data.voucher &&
        <div className={cx('list')}>
          {data.voucher.map((item, index) => (
            <Voucher shop={data} key={index} data={item} />
          ))}
        </div>
      }
    </div>
  )
}

export default Vouchers