import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { AiOutlineAppstore, AiOutlineLogout, AiOutlineMessage, AiOutlinePieChart, AiOutlineSetting, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { BsList } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const cx = classNames.bind(styles)
const Modal = ({ open, setOpen }) => {
    return (
        <section onClick={() => setOpen(false)} className={open ? cx(['container', 'open']) : cx('container')}>
            <div onClick={(e) => e.stopPropagation()} className={cx('main')}>
                <div className={cx('top')}>
                    <div className={cx('brand')}>
                        <img src="/images/logo/logo.svg" alt="" />
                        <div onClick={()=>setOpen(false)} className={cx('close')}>
                            <FaTimes />
                        </div>
                    </div>
                    <nav className={cx('links')}>
                        <ul>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/dashboard' >
                                    <AiOutlineAppstore />
                                    <span className={cx('border')}>Dashboard</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/orders'>
                                    <AiOutlineShoppingCart />
                                    <span className={cx('border')}>Orders</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/products'>
                                    <AiOutlineShopping />
                                    <span className={cx('border')}>Products</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/overviews'>
                                    <AiOutlinePieChart />
                                    <span className={cx('border')}>Overviews</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/customers'>
                                    <AiOutlineUsergroupAdd />
                                    <span className={cx('border')}>Customers</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/messages'>
                                    <AiOutlineMessage />
                                    <span className={cx('border')}>Messages</span>
                                </NavLink>
                            </li>
                            <li onClick={() => setOpen(false)}>
                                <NavLink exact="true" to='/seller/settings'>
                                    <AiOutlineSetting />
                                    <span className={cx('border')}>Settings</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('logout')}>
                    <NavLink to='/'>
                        <AiOutlineLogout />
                        <span>Log Out</span>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Modal