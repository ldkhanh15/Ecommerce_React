import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';

const cx = classNames.bind(styles)
const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <div className={cx('text')}>
          Grand opening, <strong>up to 15%</strong> off all items. <strong>Only 3 days</strong> left
        </div>
      </div>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <span className={cx('icon')} onClick={() => setOpen(true)}>
            <BsList />
          </span>
        </div>
        <div className={cx('mid')}>
          <Link to={'/'}>
            <img src="/images/logo/logo.svg" alt="" />
          </Link>
        </div>
        <div className={cx('right')}>
          <dir className={cx('item')}>
            <span className={cx('icon')}>
              <img src="/images/service/icon-heart.svg" alt="" />
              <span className={cx('count')}>0</span>
            </span>
          </dir>
          <dir className={cx('item')}>
            <span className={cx('icon')}>
              <img src="/images/service/icon-cart.svg" alt="" />
              <span className={cx('count')}>0</span>
            </span>
          </dir>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />

    </div>

  )
}

export default HeaderMobile