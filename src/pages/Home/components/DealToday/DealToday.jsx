import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Countdown from '@/components/Countdown/Countdown';
import Button from '@/components/Button';
import data from './data'
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const cx = classNames.bind(styles);
const DealToday = () => {

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h2>Deals Of The Day</h2>
        <Link to={'/'}>All Deal <IoIosArrowForward className={cx('icon')} /></Link>
      </div>
      <div className={cx('suggest')}>
        {data.map((item) => (
          <div className={cx('item')} key={item.id}>
            <div className={cx('top')}>
              <img src="/images/banner/banner-5.png" alt="" />
            </div>
            <div className={cx('bottom')}>
              <div className={cx('countdown')}>
                <Countdown />
              </div>
              <div className={cx('product')}>
                <div className={cx('name')}>
                  {item.name}
                </div>
                <div className={cx('rating')}>
                  <div className={cx('star')} style={{ width: `${item.star}` }}>

                  </div>
                </div>
                <div className={cx('author')}>
                  By <span>{item.by}</span>
                </div>
                <div className={cx('info')}>
                  <span className={cx('new-price')}>
                    ${item.newPrice}
                  </span>
                  <span className={cx('old-price')}>
                    ${item.oldPrice}
                  </span>
                  <Button rightIcon={<CiShoppingCart />} outline small>Add</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DealToday