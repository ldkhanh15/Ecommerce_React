import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Dashboard = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        Hello Rosé !
      </div>
      <div className={cx('footer')}>
        <p>
          From your account dashboard. you can easily check & view your recent orders,
          manage your <strong>shipping and billing addresses</strong> and <strong>edit your password and account details</strong>.
        </p>
      </div>
    </div>
  )
}

export default Dashboard