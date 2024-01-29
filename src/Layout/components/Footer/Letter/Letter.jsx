import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import InputLetter from '@/components/InputLetter/InputLetter';

const cx = classNames.bind(styles)
const Letter = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <h2>Stay home & get your daily <br /> needs from our shop</h2>
        <div className={cx('text')}>
          Start You'r Daily Shopping with <span>Nest Mart</span>
        </div>
        <InputLetter />
      </div>
      <div className={cx('image')}>
        <img src="/images/other/foot-banner.png" alt="" />
      </div>
    </div>
  )
}

export default Letter