import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiClock2 } from 'react-icons/ci'

const cx = classNames.bind(styles)
const Voucher = ({ data }) => {
  return (
    <div className={cx('container')}>
      {data.limit && <div className={cx('limit')}>
        Limited Redemptions
      </div>
      }
      <div className={cx('left')}>
        <img src={data.image} alt="" />
        <div className={cx('text')}>{data.name}</div>
      </div>
      <div className={cx('right')}>
        <div className={cx('title')}>
          {data.title} off
        </div>
        <div className={cx('sub-title')}>
          {data.subTitle}
        </div>
        {
          data.used && <div className={cx('expire')}>
            <div className={cx('rate')}>
              <div style={{ width: `${data.used}%` }} className={cx('sold')}>

              </div>
            </div>
            <div className={cx('text')}>
              {data.used}% used, <strong>Expiring:{data.expire} left</strong>
            </div>
          </div>
        }
        {
          data.useIn && <div className={cx('use-in')}>
            <CiClock2 className={cx('icon')} />
            <div className={cx('text')}>Use in: {data.useIn}</div>
          </div>
        }
      </div>
    </div>
  )
}

export default Voucher