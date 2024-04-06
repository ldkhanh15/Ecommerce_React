import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '../Button'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import moment from 'moment'
const cx = classNames.bind(styles)
const VendorList = ({ data, sideBar = false }) => {
  return (
    <div className={sideBar === true ? cx(['container', 'sidebar']) : cx('container')}>
      {data.mall && <div className={cx('mall')}>
        Mall
      </div>}
      <div className={cx('left')}>
        <Link to={`/shop/vendors/${data.name}`} className={cx('image')}>
          <img src={data.avatar} alt="" />
        </Link>
        <div className={cx('count')}>
          {data?.product?.length} products
        </div>
      </div>
      <div className={cx('right')}>
        <div className={cx('year')}>
          Since {moment(data.createdAt).year()}
        </div>
        <Link to={`/shop/vendors/${data.name}`} className={cx('name')}>
          {data.name}
        </Link>
        <div className={cx('rating-product')}>
          <div className={cx('rating')}>
            <div style={{ width: `${data.avgStar / 5 * 100}%` }} className={cx('star')}></div>
          </div>
          <div className={cx('text')}>
            ( {data.comment} )
          </div>
        </div>
        <div className={cx('more-info')}>
          <div className={cx('info')}>
            <div className={cx('item')}>
              <div className={cx('item-info')}>

                <span className={cx('image')}>
                  <img src="/images/service/icon-location.svg" alt="" />
                </span>
                <span className={cx('title')}>Address: </span>
                <span className={cx('value')}>
                  Hoa Khanh Nam ward, Lien Chieu district, Da Nang City
                </span>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('item-info')}>
                <span className={cx('image')}>
                  <img src="/images/service/icon-contact.svg" alt="" />
                </span>
                <span className={cx('title')}>Contact Seller: </span>
                <span className={cx('value')}>
                  (+84) - 903 - 526144
                </span>
              </div>
              <Link to={`/shop/vendors/${data.id}`} className={cx('btn')}>
                <Button small rounded rightIcon={<IoIosArrowRoundForward />}>{sideBar ? 'Contact Seller' : 'Visit Store'}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorList