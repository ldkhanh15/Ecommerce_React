import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Order = () => {
  return (
    <div className={cx('container')}>
      <h1>Orders</h1>
      <div className={cx('info')}>
        <div className={cx('item')}>
          <div className={cx('top')}>
            All Orders
          </div>
          <div className={cx('count')}>
            200000
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            To Pay
          </div>
          <div className={cx('count')}>
            200000
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            Completed Order
          </div>
          <div className={cx('count')}>
            200000
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('top')}>
            Cancelled
          </div>
          <div className={cx('count')}>
            200000
          </div>
        </div>
      </div>
      <div className={cx('list-order')}>
        <table>
          <thead>
            <tr>
              <td>
                STT
              </td>
              <td>
                ID
              </td>
              <td>
                Date
              </td>
              <td>
                Quantity product
              </td>
              <td>
                Status
              </td>
              <td>
                Details
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#123</td>
              <td>16 Feb, 2024</td>
              <td>$125 for 2 items</td>
              <td><span className={cx(['status', 'pending'])}>Pending</span></td>
              <td className={cx('view')}>View</td>
            </tr>
            <tr>
              <td>1</td>
              <td>#123</td>
              <td>16 Feb, 2024</td>
              <td>$125 for 2 items</td>
              <td><span className={cx(['status', 'completed'])}>Completed</span></td>
              <td className={cx('view')}>View</td>
            </tr>
            <tr>
              <td>1</td>
              <td>#123</td>
              <td>16 Feb, 2024</td>
              <td>$125 for 2 items</td>
              <td><span className={cx(['status', 'cancelled'])}>Cancelled</span></td>
              <td className={cx('view')}>View</td>
            </tr>
            <tr>
              <td>1</td>
              <td>#123</td>
              <td>16 Feb, 2024</td>
              <td>$125 for 2 items</td>
              <td><span className={cx(['status', 'pending'])}>Pending</span></td>
              <td className={cx('view')}>View</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={cx('navigation')}>
            <ul>
              <li className={cx('active')}>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>51</li>
            </ul>
        </div>
    </div>
  )
}

export default Order