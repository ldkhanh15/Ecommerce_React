import React from 'react'

import classNames from 'classnames/bind'
import styles from './ProductLayout.module.scss'
import SideBarProduct from './SideBarProduct'

const cx=classNames.bind(styles)
const ProductLayout = ({children}) => {
  return (
    <div className={cx('container')}>
        <SideBarProduct/>
        {children}
    </div>
  )
}

export default ProductLayout