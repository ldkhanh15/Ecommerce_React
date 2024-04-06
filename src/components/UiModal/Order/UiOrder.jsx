import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { IoIosArrowForward } from 'react-icons/io'
import { TbBasketDiscount } from 'react-icons/tb'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import ShopProduct from '@/components/CheckOut/ShopProduct/ShopProduct'

const cx = classNames.bind(styles)
const UiOrder = ({ data }) => {
  console.log(data);
  let d = data.product.map(product => {
    return {
      ...product,
      quantity: product.BillProduct.quantity,
      type: product.BillProduct.type
    };
  });
  return (
    <div className={cx('container')}>
      <div className={cx('header-info')}>
        <h2>Order detail</h2>
        <p>ID: {data.id}</p>
      </div>
      <div className={cx('main')}>
        <div className={cx('address')}>
          <input type="text" name="" id="" readOnly value={data.address.address} />
        </div>
        <div className={cx('shop-product')}>
          {
            d.map((item, index) => (
              <ShopProduct order={true} product={item} key={index} />
            ))
          }
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
                ${data.totalPrice}
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
                ${data.discountPrice}
              </div>
            </div>
            <div className={cx('total')}>
              <div className={cx('left')}>
                Total:
              </div>
              <div className={cx('right')}>
                ${data.totalPrice - data.discountPrice + 5}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UiOrder;