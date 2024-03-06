import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import { CiSearch } from 'react-icons/ci'

const cx = classNames.bind(styles)
const Products = () => {

  return (
    <div className={cx('container')}>
      <h1>Products</h1>
      <div className={cx('product')}>
        <div className={cx('header')}>
          <div className={cx('left')}>
            <input type="text" placeholder='Search a product' />
            <CiSearch className={cx('icon')} />
          </div>
          <div className={cx('right')}>
            <Button primary large>Add new product</Button>
          </div>
        </div>
        <div className={cx('list')}>
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
                  Name
                </td>
                <td>
                  Description
                </td>
                <td>
                  Price
                </td>
                <td>
                  Created at
                </td>
                <td>
                  Stock
                </td>
                <td>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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
                <td>1</td>
                <td>#123</td>
                <td>Iphone 15</td>
                <td>New iphone in 2023, design by Apple</td>
                <td>25.000.000đ</td>
                <td>17 Feb,2024</td>
                <td>100</td>
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

export default Products