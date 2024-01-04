import { LuShoppingCart } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Search from '@/Layout/components/Search/Search';
import Button from "@/components/Button";
import { Link, NavLink } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { useState } from "react";

const cx = classNames.bind(styles)

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
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
                    <Button className={cx('loginSell')} small primary to={'/seller/login'}>Become seller</Button>
                    <span className={cx('icon')}>
                        <FaRegHeart />
                    </span>
                    <span className={cx('line')}></span>
                    <span className={cx('icon')}>
                        <LuShoppingCart />
                    </span>
                    <Button className={cx('loginBuy')} small primary to={'/buyer/login'}>Login</Button>
                </div>
            </div>
            <div className={cx('nav')}>
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
            <span className={cx('list')} onClick={handleOpen}>
                <span className={cx('icon')}>
                    <BsList />
                </span>
                <div className={open === false ? cx('item') : cx(['item', 'open'])}>
                    <span className={cx('close')} >
                        <IoCloseCircleOutline onClick={handleOpen}/>
                    </span>
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
                        <li>
                            <NavLink to={'/login-seller'}>Become seller</NavLink>
                        </li>

                    </ul>
                </div>
            </span>
        </header>
    );
}

export default Header;