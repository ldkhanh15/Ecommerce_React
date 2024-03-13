import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiClock2 } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Voucher = ({ shop,data }) => {
  console.log(data);
  return (
    <Link to={`/seller/vouchers/${data.id}`} className={cx('container')}>
      {data.limit && <div className={cx('limit')}>
        Limited Redemptions
      </div>
      }
      <div className={cx('left')}>
        <img src={shop.avatar} alt="" />
        <div className={cx('text')}>{shop.name}</div>
      </div>
      <div className={cx('right')}>
        <div className={cx('title')}>
          {
            data.salePT ? `${data.salePT}% off` : ''
          }
          {
            data.salePrice ? `Discount ${data.salePrice}$` : ''
          }
        </div>
        <div className={cx('sub-title')}>
          {data.description}
        </div>
        {
            <div className={cx('expire')}>
            <div className={cx('rate')}>
              <div style={{ width: `${(data.quantity - data.remain)/data.quantity*100}%` }} className={cx('sold')}>

              </div>
            </div>
            <div className={cx('text')}>
              {(data.quantity - data.remain)/data.quantity*100}% used, <strong>Expiring:{data.expire} left</strong>
            </div>
          </div>
        }
        {
           <div className={cx('use-in')}>
            <CiClock2 className={cx('icon')} />
            <div className={cx('text')}>Use in: {data.useIn}</div>
          </div>
        }
      </div>
    </Link>
  )
}

export default Voucher