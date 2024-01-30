import useScrollToTop from '@/hooks/useScrollToTop'
import React from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import ShopProduct from './components/ShopProduct/ShopProduct'
import { TbBasketDiscount } from "react-icons/tb";
import { IoIosArrowForward } from 'react-icons/io'
import { CgNotes } from "react-icons/cg";
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

const CheckOut = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Check Out</title>
      </Helmet>
      <div className={cx('main')}>
        <div className={cx('address')}>
          <select name="" id="">
            <option value="">Choose a address</option>
            <option value="">Address1</option>
            <option value="">Address2</option>
            <option value="">Address3</option>
          </select>
        </div>
        <div className={cx('shop-product')}>
          <ShopProduct />
          <ShopProduct />
          <ShopProduct />
        </div>
        <div className={cx('footer')}>
          <div className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>Nest Voucher</div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>Select Voucher</div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('left')}>
              <TbBasketDiscount className={cx('icon')} />
              <div className={cx('text')}>Payment method</div>
            </div>
            <div className={cx('right')}>
              <div className={cx('text')}>Select Payment method</div>
              <IoIosArrowForward className={cx('icon')} />
            </div>
          </div>
        </div>
        <div className={cx('detail-checkout')}>
          <div className={cx('header')}>
            <CgNotes className={cx('icon')} />
            <div className={cx('text')}>
              Checkout Details
            </div>
          </div>
          <div className={cx('content')}>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Merchandise Subtotal:
              </div>
              <div className={cx('right')}>
                $358.24
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Shipping Subtotal:
              </div>
              <div className={cx('right')}>
                $5
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('left')}>
                Shipping Discount
              </div>
              <div className={cx('right')}>
                $4
              </div>
            </div>
            <div className={cx('total')}>
              <div className={cx('left')}>
                Total:
              </div>
              <div className={cx('right')}>
                $340.25
              </div>
            </div>
          </div>
        </div>
        <div className={cx('submit')}>
          <div className={cx('privacy')}>
            By clicking "Place Order", you are agreeing to <Link to={'/privacy-policy'}>Nest's Privacy Policy</Link>
          </div>
          <div className={cx('btn')}>
            <Button primary large>Place Order</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckOut