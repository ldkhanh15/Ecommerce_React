import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineAppstore,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import classNames from 'classnames/bind';
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Sidebar = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('top')}>
        <div className={cx('brand')}>
          <img src="/images/logo/logo.svg" alt="" />
        </div>
        <nav className={cx('links')}>
          <ul>
            <li>
              <NavLink exact="true" to='/seller/dashboard' >
                <AiOutlineAppstore />
                <span className={cx('border')}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/orders'>
                <AiOutlineShoppingCart />
                <span className={cx('border')}>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/products'>
                <AiOutlineShopping />
                <span className={cx('border')}>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/overviews'>
                <AiOutlinePieChart />
                <span className={cx('border')}>Overviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/customers'>
                <AiOutlineUsergroupAdd />
                <span className={cx('border')}>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/messages'>
                <AiOutlineMessage />
                <span className={cx('border')}>Messages</span>
              </NavLink>
            </li>
            <li>
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
    </section>
  )
}


export default Sidebar