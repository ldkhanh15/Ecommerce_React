import React from 'react'
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from "react-icons/ai"
import { BiSearch } from 'react-icons/bi'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Navbar = () => {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return (
        <nav className={cx('container')}>
            <h1>Dashboard</h1>
            <div className={cx('notification')}>
                <div className={cx('calender')}>
                    <AiOutlineCalendar />
                    <span>{month} </span>
                    <span>{day}, </span>
                    <span>{year}</span>
                </div>
                <div className={cx('action')}>
                    <BiSearch />
                </div>
                <div className={cx('action')}>
                    <AiOutlineBell />
                </div>
                <div className={cx('avatar')}>
                    <img src={'/images/other/author-1.png'} alt="" />
                </div>
                <div className={cx('down')}>
                    <AiOutlineCaretDown />
                </div>
            </div>
        </nav>
    )
}
export default Navbar