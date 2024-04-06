import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BiHome, BiLogOut } from 'react-icons/bi'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const SettingsSell = () => {

  return (
    <div className={cx('container')}>
      <h1>Settings</h1>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <img src="/favicon.ico" alt="" />
        </div>
        <div className={cx('content')}>
          <h2>
            Thankfully, as an adult, it comes much more naturally, but I still always appreciate it when I hear those words from other people too. As a brand, saying thank you to your customers is an integral part of building a personal and prosperous relationship.
          </h2>
          <p>
            Customers that feel valued and appreciated are much more likely to buy from you again, in the knowledge that you care about their experience with your brand and their satisfaction with your products.
          </p>
          <p>
            In brick-and-mortar stores, cashiers will thank customers as they pay or walk out the door, but if you’re running an e-commerce business, then you have to get a little more creative.
          </p>
          <p>
            Thank you emails are a perfect alternative to these kinds of interactions and can be changed and adapted to suit whatever needs you need to fulfill.
          </p>
        </div>
        <div className={cx('footer')}>
          <div className={cx('btn')}>
            <Button to={'/seller/dashboard'} primary large leftIcon={<BiHome />}>Back To Home</Button>
          </div>
          <div className={cx('btn')}>
            <Button to={'/'} primary large leftIcon={<BiLogOut />}> Logout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsSell