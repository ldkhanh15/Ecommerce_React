import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const Contact = () => {
  return (
    <div className={cx('container')}>Contact</div>
  )
}

export default Contact