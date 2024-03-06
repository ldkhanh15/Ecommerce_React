import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import Button from '@/components/Button'

const cx = classNames.bind(styles)
const Account = () => {

  return (
    <div className={cx('container')}>
      <h1>Account</h1>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <div className={cx('avatar')}>
            <img src="/images/other/contact-2.png" alt="" />
          </div>
          <div className={cx('name')}>
            Json David
          </div>
        </div>
        <div className={cx('right')}>
          <input type="text" placeholder='Shop Name' />
          <textarea type="text" rows={20} cols={10} placeholder='Description'></textarea>
          <input type="text" placeholder='Address'/>
          <input type="text" placeholder='Phone'/>
          <input type="text" placeholder='Banking'/>
          <div className={cx('btn')}>
            <Button primary large >Update</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account