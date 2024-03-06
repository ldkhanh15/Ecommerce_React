import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineAppstore,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineLogout,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { GrDeliver } from "react-icons/gr";
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import { BiSolidDiscount } from 'react-icons/bi';
import { CiShop } from 'react-icons/ci';

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
              <NavLink exact="true" to='/seller/account'>
                <CiShop />
                <span className={cx('border')}>Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/vouchers'>
                <BiSolidDiscount />
                <span className={cx('border')}>Vouchers</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/delivers'>
                <GrDeliver />
                <span className={cx('border')}>Delivers</span>
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