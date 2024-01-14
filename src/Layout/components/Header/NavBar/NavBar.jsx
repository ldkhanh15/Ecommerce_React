import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiCategory } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import data from './data'
import MenuHoverParent from '@/components/MenuHover/MenuHoveParent';
import Button from '@/components/Button';
const cx = classNames.bind(styles)
const NavBar = () => {

  return (
    <div className={cx('nav')}>
      <div className={cx('container')}>
        <Button cate leftIcon={<BiCategory />} rightIcon={<MdOutlineKeyboardArrowDown />}>Browse Categories</Button>

        <div className={cx('mid')}>
          <div className={cx('btnDeal')}>
            <span className={cx('image')}>
              <img src="/icon-hot.svg" alt="" />
            </span>
            <Link to={'/'} className={cx('hot-deal')}>Hot Deals</Link>
          </div>
          <div className={cx('navbar')}>
            <MenuHoverParent data={data} />
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
    </div>
  )
}

export default NavBar