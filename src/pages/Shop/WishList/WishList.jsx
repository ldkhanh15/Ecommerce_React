import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { GoTrash } from "react-icons/go";

const cx = classNames.bind(styles)
const WishList = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Stock Status</td>
              <td>Action</td>
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
                      <div className={cx('star')}></div>
                    </div>

                  </div>
                </div>
              </td>
              <td className={cx('price')}>
                $35
              </td>
              <td className={cx('status-stock')}>
                <div className={cx('in-stock')}>
                    In Stock
                </div>
              </td>
              <td className={cx('action')}>
                <div className={cx('add')}>
                  Add to cart
                </div>
              </td>
              <td className={cx('trash')}>
                <GoTrash className={cx('icon')}/>
              </td>
            </tr>

            <tr>
              <td className={cx('product')}>
                <div className={cx('detail')}>
                  <div className={cx('left')}>
                    <img src="/product-4-1.jpg" alt="" />
                  </div>
                  <div className={cx('right')}>
                    <div className={cx('name')}>
                      Angie's Boomchickapop Sweet & Salty
                    </div>
                    <div className={cx('rating')}>
                      <div className={cx('star')}></div>
                    </div>

                  </div>
                </div>
              </td>
              <td className={cx('price')}>
                $35
              </td>
              <td className={cx('status-stock')}>
                <div className={cx('out-stock')}>
                    Out Stock
                </div>
              </td>
              <td className={cx('action')}>
                <div className={cx('contact')}>
                  Contact us
                </div>
              </td>
              <td className={cx('trash')}>
                <GoTrash className={cx('icon')}/>
              </td>
            </tr>
          </tbody>
        </table>
        <span className={cx('clear')}>
          Clear All
        </span>
      </div>
    </div>
  )
}

export default WishList