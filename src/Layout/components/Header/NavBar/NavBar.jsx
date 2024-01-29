import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiCategory } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { cate, nav } from './data'
import MenuHoverParent from '@/components/MenuHover/MenuHoveParent';
import Button from '@/components/Button';
const cx = classNames.bind(styles)
const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cx('nav')}>
      <div className={cx('container')}>
        <Button onClick={()=> setOpen(!open)} cate leftIcon={<BiCategory />} rightIcon={<MdOutlineKeyboardArrowDown />}>
          Browse Categories
        </Button>
        {open &&
          <div className={cx('modal')}>
            <div className={cx('main')}>
              <ul>
                {cate.map((item, index) => (
                  <li key={index}>
                    <div className={cx('image')}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={cx('content')}>
                      {item.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        <div className={cx('mid')}>
          <div className={cx('btnDeal')}>
            <span className={cx('image')}>
              <img src="/images/service/icon-hot.svg" alt="" />
            </span>
            <Link to={'/shop'} className={cx('hot-deal')}>Hot Deals</Link>
          </div>
          <div className={cx('navbar')}>
            <MenuHoverParent data={nav} />
          </div>
        </div>
        <div className={cx('right')}>
          <span className={cx('icon')}>
            <img src="/images/service/icon-headphone.svg" alt="" />
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