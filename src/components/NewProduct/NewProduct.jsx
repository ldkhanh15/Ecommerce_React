import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const NewProduct = ({data}) => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <img src={data.image} alt="" />
      </div>
      <div className={cx('right')}>
        <div className={cx('name')}>
            {data.name}
        </div>
        <div className={cx('price')}>
          ${data.price}
        </div>
        <div className={cx('rating')}>
          <div className={cx('star')} style={{width:`${data.star}%`}}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct