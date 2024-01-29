import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { BiCategory } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'
import data from './data'
import VendorList from '@/components/VendorList/VendorList'
import { Helmet } from 'react-helmet'
const cx = classNames.bind(styles)
const Vendor = () => {
  return (
    <div className={cx('container')}>
       <Helmet>
        <title>Vendor</title>
      </Helmet>
      <div className={cx('header')}>
        <h1>Vendor List</h1>
        <div className={cx('input')}>
          <input type="text" placeholder='Search Vendors (by Name or ID)...' />
          <CiSearch className={cx('icon')} />
        </div>
      </div>
      <div className={cx('action')}>
        <div className={cx('left')}>
          We have <strong>780</strong> vendors now.
        </div>
        <div className={cx('right')}>
          <div className={cx('show')}>
            <div className={cx('content')}>
              <BiCategory className={cx('icon')} />
              <div className={cx('text')}>
                Show:
              </div>
            </div>
            <select name="show" id="">
              <option value="">5</option>
              <option value="">10</option>
              <option value="">15</option>
            </select>
          </div>
          <div className={cx('show')}>
            <div className={cx('content')}>
              <FaSort className={cx('icon')} />
              <div className={cx('text')}>
                Sort by:
              </div>
              <select name="sort" id="">
                <option value="">Default</option>
                <option value="">Ascending</option>
                <option value="">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list-vendor')}>
        {
          data.map((item, index) => (
            <VendorList key={index} data={item} />
          ))
        }
      </div>
      <div className={cx('navigation')}>
        <ul>
          <li className={cx('active')}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  )
}

export default Vendor