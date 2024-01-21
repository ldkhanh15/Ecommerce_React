import useScrollToTop from '@/hooks/useScrollToTop'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { FaBookOpen, FaFacebook } from "react-icons/fa";
import { BsApple } from 'react-icons/bs'

const cx = classNames.bind(styles)
const RegisterBuy = () => {
  useScrollToTop();
  const [agree, setAgree] = useState(false);
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <h3>Create an Account</h3>
        <p>Already have an account ? <Link to={'/buyer/login'}>Login instead!.</Link></p>
        <form action="">
          <input type="text" placeholder='Username *' />
          <input type="text" placeholder='Email *' />
          <input type="password" placeholder='Password *' />
          <input type="password" placeholder='Confirm Password *' />
          <div className={cx('secure')}>
            <input type="text" placeholder='Security Code' />
            <div className={cx('code')}>
              <span>8</span>
              <span>7</span>
              <span>6</span>
              <span>9</span>
            </div>
          </div>
          <div className={cx('action')}>
            <div className={cx('left-action')}>
              <input type="checkbox" id='agree' />
              <label onClick={() => setAgree(!agree)} className={agree ? cx('active') : ''} htmlFor="agree">I agree to terms & Policy</label>
            </div>
            <div className={cx('right-action')}>
              <FaBookOpen className={cx('icon')} />
              <span className={cx('text')}>Learn more</span>
            </div>
          </div>
          <div className={cx('btn')}>
            <button type='submit'>Submit & Register</button>
          </div>
        </form>
      </div>
      <div className={cx('right')}>
        <div className={cx('main')}>
          <div className={cx('item')}>
            <div className={cx('image')}>
              <img src="/logo-facebook.svg" alt="" />
            </div>
            <div className={cx('text')}>
              Continue with Facebook
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('image')}>
              <img src="/logo-google.svg" alt="" />
            </div>
            <div className={cx('text')}>
              Continue with Google
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('image')}>
              <img src="/logo-apple.svg" alt="" />
            </div>
            <div className={cx('text')}>
              Continue with Apple
            </div>
          </div>
        </div>
      </div>
      <div className={cx('other')}>
        <div className={cx('main')}>
          <p className={cx('text')}>
            OR CONTINUE WITH
          </p>
          <div className={cx('image')}>
            <div className={cx('item')} title="Login with Facebook">
              <FaFacebook className={cx('icon')}/>
            </div>
            <div className={cx('item')} title="Login with Google">
              <img src="/logo-google.svg" alt="" />
            </div>
            <div className={cx('item')} title="Login with Apple">
              <BsApple className={cx('icon')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterBuy