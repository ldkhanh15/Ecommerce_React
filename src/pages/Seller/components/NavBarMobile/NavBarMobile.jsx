import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BsList } from 'react-icons/bs'
import Sidebar from '@/Layout/components/Sidebar/Sidebar'
import Modal from './component/Modal/Modal'
const cx = classNames.bind(styles)
const NavBarMobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src="/images/logo/logo.svg" alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className={cx('icon')}>
                    <BsList />
                </div>
            </div>
            <Modal open={open} setOpen={setOpen} />

        </>
    )
}

export default NavBarMobile