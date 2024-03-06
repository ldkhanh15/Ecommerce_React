import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import Voucher from '@/components/Voucher/Voucher'
import data from './data'
const cx = classNames.bind(styles)
const Vouchers = () => {
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
      <div className={cx('list')}>
        {data.map((item, index) => (
          <Voucher key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Vouchers