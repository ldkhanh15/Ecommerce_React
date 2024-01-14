import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const TopProduct = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('left')}>
            <img src="/product-2-1.jpg" alt="" />
        </div>
        <div className={cx('right')}>
            <h4>All Nature Italian-Style Chicken Meatballs</h4>
            <div className={cx('rating')}>
                <div className={cx('star')}>

                </div>
            </div>
            <div className={cx('price')}>
                <div className={cx('new-price')}>
                    $238.25
                </div>
                <div className={cx('old-price')}>
                    $245.8
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProduct