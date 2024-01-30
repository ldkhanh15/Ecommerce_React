import React from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button';
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const ThankYou = () => {
  return (
    <div className={cx('container')}>
      <Helmet>
        <title>Thank you</title>
      </Helmet>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <img src="/favicon.ico" alt="" />
          <h1>THANK YOU!</h1>
        </div>
        <div className={cx('content')}>
          <p>Dear <span>Khánh</span></p>
          <p>
            We are excited that you made your order at <strong>Car Toys</strong>! Your ordered products will surely level up your coffee experience!
          </p>
          <p>
            As soon as we ship your order (and that will be very soon!), we'll send you an email.
          </p>
          <i>
            In the meantime please take a minute and double-check your order details!
          </i>
        </div>
        <Link to={'/'} className={cx('footer')}>
          <Button primary large leftIcon={<BiHome />}>Back To Home</Button>
        </Link>
      </div>

    </div>
  )
}

export default ThankYou