import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BsSend } from "react-icons/bs";

const cx = classNames.bind(styles)
const Letter = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <h2>Stay home & get your daily <br /> needs from our shop</h2>
        <div className={cx('text')}>
          Start You'r Daily Shopping with <span>Nest Mart</span>
        </div>
        <form action="">
          <div className={cx('input')}>
            <span className={cx('icon')}><BsSend /></span>
            <input type="text" placeholder='Your Email Address'/>
          </div>
          <div className={cx('btn')}><button>Subscribe</button></div>
        </form>
      </div>
      <div className={cx('image')}>
        <img src="/foot-banner.png" alt="" />
      </div>
    </div>
  )
}

export default Letter