import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'

const cx = classNames.bind(styles)
const Vendor = () => {

  return (
    <div className={cx('container')}>
      <h1>Vendors</h1>
      <div className={cx('vendor')}>
        <div className={cx('header')}>
          <input type="text" placeholder='Search a vendor' />
          <CiSearch className={cx('icon')} />
        </div>
        <div className={cx('list')}>
          <table>
            <thead>
              <tr>
                <td>
                  STT
                </td>
                <td>
                  Name
                </td>
                <td>
                  Phone
                </td>
                <td>
                  Number of purchases
                </td>
                <td>
                  Number of successful orders
                </td>
                <td>
                  Total purchase order
                </td>
                <td>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>David Json</td>
                <td>0903526144</td>
                <td>12</td>
                <td>11</td>
                <td>598.25$</td>
                <td className={cx('action')}>
                  <button className={cx(['btn', 'view'])}>
                    View
                  </button>
                  <button className={cx(['btn', 'del'])}>
                    Delete
                  </button>
                </td>
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
    </div>
  )
}

export default Vendor