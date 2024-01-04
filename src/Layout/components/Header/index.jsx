import { LuShoppingCart } from "react-icons/lu";

import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Search from '@/Layout/components/Search/Search';
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('top')}>
        <div className={cx('logo')}>
          <Link to={'/'} className={cx('icon')}><FaShoppingBag /></Link>
          <Link to={'/'} className={cx('title')}>Brand</Link>
        </div>
        <div className={cx('search')}>
          <Search />
        </div>
        <div className={cx('right')}>
          <Button small primary to={'/seller/login'}>Become seller</Button>
          <span className={cx('icon')}>
            <FaRegHeart />
          </span>
          <span className={cx('line')}></span>
          <span className={cx('icon')}>
            <LuShoppingCart />
          </span>
          <Button small primary to={'/buyer/login'}>Login</Button>
        </div>
      </div>
      <div className={cx('bottom')}> 
        <ul className={cx('top-search')}>
          <li>
            áo quần nam
          </li>
          <li>
            giày nữ
          </li>
          <li>
            áo quần nam
          </li>
          <li>
            giày nữ
          </li>
          <li>
            áo quần nam
          </li>
          <li>
            giày nữ
          </li>
          <li>
            áo quần nam
          </li>
        </ul>
      </div>
      
    </header>
  );
}

export default Header;