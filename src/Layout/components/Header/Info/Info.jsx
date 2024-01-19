import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { IoEarthOutline } from "react-icons/io5";
import useWindowDimensions from '@/hooks/useWindowDimensions ';

const cx = classNames.bind(styles)
const Info = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            {width < 992 ?
                <div className={cx('top')}>
                    <div className={cx('text')}>
                        Grand opening, <strong>up to 15%</strong> off all items. <strong>Only 3 days</strong> left
                    </div>
                </div>
                :
                <div className={cx('container')}>
                    <div className={cx('left')}>
                        <ul>
                            <li><Link to={'/about-us'}>About Us</Link></li>
                            <li><Link to={'/my-account'}>My Account</Link></li>
                            <li><Link to={'/shop/wish-list'}>WishList</Link></li>
                            <li><Link to={'/order-tracking'}>Order Tracking</Link></li>
                            <li><Link to={'/seller/login'}>Become Seller</Link></li>
                        </ul>
                    </div>

                    <div className={cx('mid')}>
                        <span>Get great devices up to 50% off </span>
                        <Link to={'/'}>View details</Link>
                    </div>
                    <div className={cx('right')}>
                        <ul>
                            <li>
                                <span>Need help? Call Us: </span>
                                <span className={cx('phone')}>+ 1800 - 888</span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <IoEarthOutline />
                                </span>
                                <span>
                                    English
                                </span>
                            </li>
                            <li>
                                <span>USD</span>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default Info