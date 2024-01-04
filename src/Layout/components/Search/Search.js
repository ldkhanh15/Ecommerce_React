import React from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import { IoSearchOutline } from "react-icons/io5";


const cx=classNames.bind(styles)
const Search = () => {
  return (
    <div className={cx('container')}>
        <input className={cx('input')} placeholder='Search a product'/>
        <span className={cx('line')}></span>
        <span className={cx('icon')}>
          <IoSearchOutline/>
        </span>
    </div>
  )
}

export default Search