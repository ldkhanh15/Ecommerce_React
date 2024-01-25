import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx=classNames.bind(styles)
const CreateComment = () => {
  return (
    <div className={cx('container')}>
      <h2>Leave a Comment</h2>
      <div className={cx('rating')}>
        <div className={cx('star')}>
          
        </div>
      </div>
      <form action="">
        <textarea name="" id="" cols="30" rows="10" placeholder='Write Comment'></textarea>
        <div className={cx('input')}>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
        </div>
        <input type="text" placeholder='Website'/>
        <button type='submit'>Post Comment</button>
      </form>
    </div>
  )
}

export default CreateComment