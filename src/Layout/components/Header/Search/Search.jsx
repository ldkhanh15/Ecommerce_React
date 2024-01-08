import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import Modal from '../Mobile/Modal/Modal';
import { BsList } from 'react-icons/bs';

const cx = classNames.bind(styles)
const Search = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cx('search')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src="/logo.svg" alt="" />
        </div>
        <div className={cx('search')}>
          <select className={cx('cate')} name="category" id="">
            <option value="">All Categories</option>
            <option value="">Electronics</option>
            <option value="">Women's</option>
            <option value="">Men's</option>
          </select>
          <input className={cx('input')} type="text" placeholder='Search' />
          <IoSearchOutline className={cx('icon')} />
        </div>
        {/* <select name="location" className={cx('location')} id="">
          <option value="">Your Location</option>
          <option value="">Hồ Chí Minh</option>
          <option value="">Hà Nội</option>
          <option value="">Đà Nẵng</option>
          <option value="">New York</option>
        </select> */}
        <span className={cx('icon-nav')} onClick={() => setOpen(true)}>
          <BsList />
        </span>
        <div className={cx('action')}>
          <div className={cx('item')} title='Compare'>
            <span className={cx('icon')}>
              <img src="/icon-compare.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              Compare
            </span>

          </div>
          <div className={cx('item')} title='WishList'>
            <span className={cx('icon')}>
              <img src="/icon-heart.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              WishList
            </span>

          </div>
          <div className={cx('item')} title='Cart'>
            <span className={cx('icon')}>
              <img src="/icon-cart.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              Cart
            </span>

          </div>
          <div className={cx('item')} title='Account'>
            <span className={cx('icon')}>
              <img src="/icon-user.svg" alt="" />
            </span>
            <span className={cx('text')}>
              Account
            </span>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Search