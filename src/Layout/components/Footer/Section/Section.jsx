import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { data,info } from './data'
const cx = classNames.bind(styles)
const Section = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <div className={cx('info')}>
          <div className={cx('logo')}>
            <img src="/logo.svg" alt="" />
          </div>
          <div className={cx('desc')}>
            Awesome grocery store website template
          </div>
          <div className={cx('detail')}>
            {info.map((item,index)=>(
              <div className={cx('item')}>
                <span className={cx('icon')}>
                  <img src={item.icon} alt="" />
                </span>
                <span className={cx('title')}>
                  {item.title}: 
                </span>
                <span className={cx('desc')}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        {data.map((item,index)=>(
         <div key={index} className={cx('list')}>
          <h2>{item.title}</h2>
          <ul>
            {item.children.map((value,index)=>(
              <li key={index}>{value.title}</li>
            ))}
          </ul>
         </div>
        ))}
        <div className={cx('install')}>
          <h2>Install App</h2>
          <p>From App Store or Google Play</p>
          <div className={cx('image')}>
            <img src="/app-store.jpg" alt="" />
            <img src="/google-play.jpg" alt="" />
          </div>
          <div className={cx('payment')}>
            <p>Secured Payment Gateways</p>
            <img src="/payment-method.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section