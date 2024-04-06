import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiSolidDiscount } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { voucher } from '../../../pages/Shop/CheckOut/data'
import ModalVoucher from '@/components/ModalVoucher/ModalVoucher'
const cx = classNames.bind(styles)
const ShopProduct = ({ order, product }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (!order) {
      setOpen(true)
    }
  }
  console.log(product);
  return (
    <div className={cx('container')}>
      <ModalVoucher data={voucher} open={open} setOpen={setOpen} voucher={true} />
      <div className={cx('shop')}>
        <div className={cx('name-shop')}>
          {product.shop.name}
        </div>
        <Link to={`/shop/vendors/${product.shop.id}`}>View Shop</Link>
      </div>
      <div className={cx('product')}>
        <div className={cx('left')}>
          <img src={product.mainImage} alt="" />
        </div>
        <div className={cx('right')}>
          <div className={cx('name')}>
            {product.name}
          </div>
          <div className={cx('type')}>
            Type: Combo x2
          </div>
          <div className={cx('price-quantity')}>
            <div className={cx('price')}>
              ${Math.floor(product.price * (100 - product.sale)) / 100}
            </div>
            <div className={cx('quantity')}>
              x{product.quantity}
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
          {product.quantity * Math.floor(product.price * (100 - product.sale)) / 100}$
        </div>
      </div>
    </div>
  )
}

export default ShopProduct