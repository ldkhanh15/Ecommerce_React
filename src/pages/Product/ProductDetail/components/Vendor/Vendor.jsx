import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Vendor = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <div className={cx('top')}>
          <div className={cx('left')}>
            <img src="/images/vendor/vendor-18.svg" alt="" />
          </div>
          <div className={cx('right')}>
            <div className={cx('name')}>
              Noodles Co.
            </div>
            <div className={cx('info')}>
              <div className={cx('rating')}>
                <div className={cx('star')}>

                </div>
              </div>
              <div className={cx('text')}>
                (32 reviews)
              </div>
            </div>
          </div>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('item')}>
            <span className={cx('image')}>
              <img src="/images/service/icon-location.svg" alt="" />
            </span>
            <span className={cx('title')}>Address: </span>
            <span className={cx('value')}>
              Hoa Khanh Nam ward, Lien Chieu district, Da Nang City
            </span>
          </div>
          <div className={cx('item')}>
            <span className={cx('image')}>
              <img src="/images/service/icon-contact.svg" alt="" />
            </span>
            <span className={cx('title')}>Contact Seller: </span>
            <span className={cx('value')}>
              (+84) - 903 - 526144
            </span>
          </div>
        </div>
      </div>
      <div className={cx('rating-percent')}>
        <div className={cx('item')}>
          <div className={cx('title')}>
            Rating
          </div>
          <div className={cx('number')}>
            92%
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('title')}>
            Ship on time
          </div>
          <div className={cx('number')}>
            92%
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('title')}>
            Chat response
          </div>
          <div className={cx('number')}>
            92%
          </div>
        </div>
      </div>
      <div className={cx('desc')}>
        Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.
      </div>
    </div>
  )
}

export default Vendor