import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'

const cx = classNames.bind(styles)
const SellerLayout = ({ children }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('side-bar')}>
                <Sidebar/>
            </div>
            <div className={cx('children')}>
                {children}
            </div>
        </div>
    )
}

export default SellerLayout