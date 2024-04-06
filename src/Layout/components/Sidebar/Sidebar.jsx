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
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { GrDeliver } from "react-icons/gr";
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import { BiSolidDiscount } from 'react-icons/bi';
import { CiLocationOn, CiShop } from 'react-icons/ci';
import { TbCategory } from 'react-icons/tb';
import { ImFontSize } from "react-icons/im";
import { MdPayment } from 'react-icons/md';
import { CgNotes } from 'react-icons/cg';
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
                <AiOutlinePieChart />
                <span className={cx('border')}>Overview</span>
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
              <NavLink exact="true" to='/seller/banner'>
                <TfiLayoutSliderAlt/>
                <span className={cx('border')}>Banner</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/category'>
                <TbCategory />
                <span className={cx('border')}>Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/size'>
                <ImFontSize />
                <span className={cx('border')}>Size</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/payment'>
                <MdPayment />
                <span className={cx('border')}>Payment</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to='/seller/blog'>
                <CgNotes />
                <span className={cx('border')}>Blog</span>
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
    </section>
  )
}


export default Sidebar