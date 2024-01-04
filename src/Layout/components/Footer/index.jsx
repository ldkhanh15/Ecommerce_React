import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const cx = classNames.bind(styles)
const Footer = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('contact')}>
        <h2>Contact us</h2>
        <span className={cx('desc')}>
          Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:
        </span>
        <div className={cx('box')}>
          <div>
            <div className={cx('item')}>
              <div className={cx('label')}>
                PHONE NUMBER
              </div>
              <div className={cx('content')}>
                +84 903 526 144
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('label')}>
                OUR LOCATION
              </div>
              <div className={cx('content')}>
                129 Pham Nhu Xuong Street, Lien Chieu District, Da Nang City.
              </div>
            </div>

          </div>
          <div>
            <div className={cx('item')}>
              <div className={cx('label')}>
                EMAIL ADDRESS
              </div>
              <div className={cx('content')}>
                ledinhkhanh2004@gmail.com
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('label')}>
                WORKING HOURS
              </div>
              <div className={cx('content')}>
                Mon - Sat 8:00 AM - 10:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list')}>
        <h2>Information</h2>
        <ul>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Contact us</li>
          <li>Site map</li>
        </ul>
      </div>
      <div className={cx('list')}>
        <h2>My Account</h2>
        <ul>
          <li>Order History</li>
          <li>Wish List</li>
          <li>Newsletter</li>
          <li>Special Offer</li>
        </ul>
      </div>
      <div className={cx('list')}>
        <h2>Customer Service</h2>
        <ul>
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>How to Sell</li>
        </ul>
        <div className={cx('follow')}>
          <div className={cx('text')}>Follow us on social network</div>
          <div className={cx('icon')}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer