import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiShoppingBag, BiTrash } from 'react-icons/bi'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@/components/Button'
import { FaFingerprint } from "react-icons/fa";
import useScrollToTop from '@/hooks/useScrollToTop'

const cx = classNames.bind(styles)
const Cart = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3 className={cx('title')}>Your Cart</h3>
        <div className={cx('sub-title')}>
          <div className={cx('left')}>
            Carefully check the information before checkout
          </div>
          <div className={cx('right')}>
            <BiTrash className={cx('icon')} />
            <span className={cx('text')}>Clear Cart</span>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>Product</td>
              <td>Unit Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cx('product')}>
                <div className={cx('detail')}>
                  <div className={cx('left')}>
                    <img src="/product-2-1.jpg" alt="" />
                  </div>
                  <div className={cx('right')}>
                    <div className={cx('name')}>
                      Angie's Boomchickapop Sweet & Salty
                    </div>
                    <div className={cx('rating')}>
                      <div style={{ width: '45%' }} className={cx('star')}></div>
                    </div>

                  </div>
                </div>
              </td>
              <td className={cx('price')}>
                $35
              </td>
              <td className={cx('quantity')}>
                <input type="number" title='quantity' min={1} defaultValue={1} />
            </td>
            <td className={cx('sub-total')}>
              $35
            </td>
            <td className={cx('trash')}>
              <BiTrash />
            </td>
          </tr>
          <tr>
            <td className={cx('product')}>
              <div className={cx('detail')}>
                <div className={cx('left')}>
                  <img src="/product-2-1.jpg" alt="" />
                </div>
                <div className={cx('right')}>
                  <div className={cx('name')}>
                    Angie's Boomchickapop Sweet & Salty
                  </div>
                  <div className={cx('rating')}>
                    <div style={{ width: '45%' }} className={cx('star')}></div>
                  </div>

                </div>
              </div>
            </td>
            <td className={cx('price')}>
              $35
            </td>
            <td className={cx('quantity')}>
              <input type="number" defaultValue={1} min={1}/>
            </td>
            <td className={cx('sub-total')}>
              $35
            </td>
            <td className={cx('trash')}>
              <BiTrash />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={cx('footer')}>
        <div className={cx('clear')}>
          <LiaTimesSolid className={cx('icon')}/>
          <span className={cx('text')}>Clear Cart</span>
        </div>
        <div className={cx('shopping')}>
          <Button primary leftIcon={<BiShoppingBag/>} large>Continue Shopping</Button>
        </div>
        <div className={cx('line')}>
          <FaFingerprint className={cx('icon')}/>
        </div>
      </div>  
    </div>
    </div >
  )
}

export default Cart