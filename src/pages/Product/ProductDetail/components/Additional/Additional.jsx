import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import data from './data'
const cx=classNames.bind(styles)
const Additional = () => {
  return (
    <div className={cx('container')}>
      {
        data.map((item,index)=>(
          <div key={index} className={cx('box')}>
            <div className={cx('title')}>
              {item.title}
            </div>
            <div className={cx('value')}>
              {item.value}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Additional