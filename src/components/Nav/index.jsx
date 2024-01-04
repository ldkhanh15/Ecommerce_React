import React from 'react'
import classNames from 'classnames/bind'
import styles from './Nav.module.scss'
import { TbCategory } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)
const Nav = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('left')}>
                <span className={cx('icon')}>
                    <TbCategory />
                </span>
                <span className={cx('text')}>
                    Category

                </span>
                <div className={cx('box')}>
                    <ul>
                        <li>
                            Grocery and Stapleưqewrqrqrqrqr
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                        <li>
                            Grocery and Staple
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('right')}>
                <ul>
                    <li>
                        <NavLink exact="true" to='/' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/product'}>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/offer'}>Offers</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/help-center'}>Faq</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact-us'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Nav