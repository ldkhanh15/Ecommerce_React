import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import data from './data'
const cx = classNames.bind(styles)
const Delivers = () => {
  return (
    <div className={cx('container')}>
      <h1>Delivers</h1>
      <div className={cx('deliver')}>
        <h2>Selected delivers</h2>
        <div className={cx('list')}>
          {
            data.map((item, index) => (
              <div key={index} className={cx(['item','selected'])}>
                {item.title}
              </div>
            ))
          }
        </div>
      </div>
      <div className={cx('deliver')}>
      <h2>All delivers</h2>
        <div className={cx('list')}>
          {
            data.map((item, index) => (
              <div key={index} className={cx('item')}>
                {item.title}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Delivers