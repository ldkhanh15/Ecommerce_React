import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import data from './data'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const Provide = () => {
  return (
      <div className={cx('container')}>
        <h2>What We Provide</h2>
        <div className={cx('list')}>
          {data.map((item,index)=>(
            <div key={index} className={cx('item')}>
              <div className={cx('icon')}>
                <img src={item.image} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <Link to={'/'}>Read more</Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Provide