import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import data from './data'
const cx = classNames.bind(styles)
const Feature = () => {
  return (
    <div className={cx('container')}>
      {data.map((item, index) => (
        <div className={cx('item')}>
          <div className={cx('left')}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={cx('right')}>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feature