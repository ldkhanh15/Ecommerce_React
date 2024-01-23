import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles);
const AccountDetail = () => {
  const [gender, setGender] = useState('male')
  return (
    <div className={cx('container')}>
      <div className={cx('main')}>
        <div className={cx('header')}>
          <h3>My Profile</h3>
          <p>Manage and protect your account</p>
        </div>
        <div className={cx('info')}>
          <div className={cx('input')}>
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id='firstName' placeholder='First Name' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id='lastName' placeholder='Last Name' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="displayName">Display Name *</label>
            <input type="text" id='displayName' placeholder='Display Name' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="email">Email *</label>
            <input type="text" id='email' placeholder='Email' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="phone">Phone Number *</label>
            <input type="text" id='phone' placeholder='Phone Number' />
          </div>
          <div className={cx('input')}>
            <label htmlFor="gender">Gender *</label>
            <div className={cx('radio-input')} id='gender'>
              <div className={cx('item')}>
                <input defaultChecked name='gender' type="radio" id='male' />
                <label onClick={()=>setGender('male')} className={gender === 'male' ? cx('active') : ''} htmlFor="male">Male *</label>
              </div>
              <div className={cx('item')}>
                <input name='gender' type="radio" id='female' />
                <label onClick={()=>setGender('female')} className={gender === 'female' ? cx('active') : ''} htmlFor="female">Female *</label>
              </div>
              <div className={cx('item')}>
                <input name='gender' type="radio" id='other' />
                <label onClick={()=>setGender('other')} className={gender === 'other' ? cx('active') : ''} htmlFor="other">Others *</label>
              </div>
            </div>
          </div>
          <div className={cx('btn')}>
            <button type='submit'>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetail