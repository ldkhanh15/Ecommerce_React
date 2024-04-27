import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import useWindowDimensions from '@/hooks/useWindowDimensions '
import NavBarMobile from '../components/NavBarMobile/NavBarMobile'

const cx = classNames.bind(styles)
const SellerLayout = ({ children }) => {
    let { width } = useWindowDimensions();
    return (
        <div className={cx('container')}>
            <div className={cx('side-bar')}>
                {width <768 ? <NavBarMobile /> : null}
                {width >= 768 ? <Sidebar /> : null}
            </div>
            <div className={cx('children')}>
                {children}
            </div>
        </div>
    )
}

export default SellerLayout