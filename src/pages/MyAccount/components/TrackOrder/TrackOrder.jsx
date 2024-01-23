import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles);

const TrackOrder = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h3>Orders Tracking</h3>
        <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
      </div>
      <div className={cx('main')}>
        <form action="">
          <div className={cx('input')}>
            <label htmlFor="">Order ID</label>
            <input type="text" placeholder='Found in your order confirmation email'/>
          </div>
          <div className={cx('input')}>
            <label htmlFor="">Billing email</label>
            <input type="email" placeholder='Email you used during checkout'/>
          </div>
          <button type='submit'>Track</button>
        </form>
      </div>
    </div>
  )
}

export default TrackOrder