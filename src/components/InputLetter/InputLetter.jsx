import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BsSend } from "react-icons/bs";

const cx = classNames.bind(styles)
const InputLetter = () => {
    return (
        <form action="">
            <div className={cx('input')}>
                <span className={cx('icon')}><BsSend /></span>
                <input type="text" placeholder='Your Email Address' />
            </div>
            <div className={cx('btn')}><button>Subscribe</button></div>
        </form>
    )
}

export default InputLetter