import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSolidDiscount } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { voucher } from '../../../pages/Shop/CheckOut/data'
import ModalVoucher from '@/components/ModalVoucher/ModalVoucher'
const cx = classNames.bind(styles)
const ShopProduct = ({order}) => {
  const [open, setOpen] = useState(false);
  const handleClick=()=>{
    if(!order){
      setOpen(true)
    }
  }
  return (
    <div className={cx('container')}>
      <ModalVoucher data={voucher} open={open} setOpen={setOpen} voucher={true} />
      <div className={cx('shop')}>
        <div className={cx('name-shop')}>
          Car Toys
        </div>
        <Link to={'/shop/vendors/car-toys'}>View Shop</Link>
      </div>
      <div className={cx('product')}>
        <div className={cx('left')}>
          <img src="/images/product/product-1-1.jpg" alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx('name')}>
            All Natural Italian-Style Chicken Meatballs
          </div>
          <div className={cx('type')}>
            Type: Combo x2
          </div>
          <div className={cx('price-quantity')}>
            <div className={cx('price')}>
              $238.5
            </div>
            <div className={cx('quantity')}>
              x2
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className={cx('voucher')}>
        <div className={cx('left')}>
          <div className={cx('icon')}>
            <BiSolidDiscount />
          </div>
          <div className={cx('text')}>
            Shop Voucher
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('text')}>
            Select or enter code
          </div>
          <div className={cx('icon')}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className={cx('total')}>
        <div className={cx('text')}>
          Total:
        </div>
        <div className={cx('price')}>
          300.25$
        </div>
      </div>
    </div>
  )
}

export default ShopProduct