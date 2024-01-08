import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiCategory } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import data from './data'
import MenuHoverParent from '@/components/MenuHover/MenuHoveParent';
const cx=classNames.bind(styles)
const NavBar = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <span className={cx('icon')}><BiCategory/></span>
        <span className={cx('text')}>Browse All Categories</span>
        <span className={cx('icon')}><MdOutlineKeyboardArrowDown/></span>
      </div>
      <div className={cx('mid')}>
        <div className={cx('btnDeal')}>
          <span className={cx('image')}>
            <img src="/icon-hot.svg" alt="" />
          </span>
          <span className={cx('text')}><Link to={'/'}>Hot Deals</Link></span>
        </div>
        <div className={cx('navbar')}>
          <MenuHoverParent data={data}/>
        </div>
      </div>
      <div className={cx('right')}>
        <span className={cx('icon')}>
          <img src="/icon-headphone.svg" alt="" />
        </span>
        <div className={cx('info')}>
          <div className={cx('main')}>
            1800 - 8888
          </div>
          <div className={cx('sub')}>
            24/7 Support Center
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar