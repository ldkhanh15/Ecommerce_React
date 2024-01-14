import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import './styles.css'
const cx = classNames.bind(styles);
const MyAccount = () => {
  return (
    <div className="image-container">
      <img src="/product-2-1.jpg" alt="Image1" className="image" />
      <img src="product-2-2.jpg" alt="Image2" className="image hover-effect" />
    </div>
  )
}

export default MyAccount