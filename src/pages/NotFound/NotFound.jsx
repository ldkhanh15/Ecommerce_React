import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import Button from '@/components/Button'
import { BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const cx = classNames.bind(styles)
const NotFound = () => {
    return (
        <div className={cx('container')}>
            <Helmet>
                <title>404 - Not Found</title>
            </Helmet>
            <div className={cx('main')}>
                <img src="/images/other/page-404.png" alt="" />
                <h1>Page Not Found</h1>
                <p>
                    The link you clicked may be broken or the page may have been removed.
                    visit the <Link to="/">HomePage</Link> or <Link to="/contact">Contact us</Link> about the problem
                </p>
                <div className={cx('input')}>
                    <input type="text" placeholder='Search...' />
                    <CiSearch className={cx('icon')} />
                </div>
                <Link to={'/'} className={cx('btn')}>
                    <Button leftIcon={<BiHome />} primary large>Back To HomePage</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound