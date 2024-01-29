import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { BsSearch } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { BiCategory } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";
import data from '@/Layout/components/Header/Mobile/Modal/data'
import ParentMenu from '@/components/Menu/ParentMenu';

const cx = classNames.bind(styles)
const Modal = ({ open, setOpen }) => {
    const [openMenu, setOpenMenu] = useState(null);
    return (
        <div className={open ? cx(['modal', 'open']) : cx('modal')} onClick={() => setOpen(false)}>
            <div className={cx('main-modal')} onClick={(e) => { e.stopPropagation() }}>
                <div className={cx('header')}>
                    <div className={cx('left')}>
                        <img src="/images/logo/logo.svg" alt="" />
                    </div>
                    <div className={cx('right')} onClick={() => { setOpen(false) }}>
                        <LiaTimesSolid />
                    </div>
                </div>
                <div className={cx('search')} title='Search'>
                    <input type="text" placeholder='Search for items...' />
                    <span className={cx('icon')}><BsSearch /></span>
                </div>
                <div className={cx('list')}>
                    <div className={cx('title')}>
                        <span className={cx('icon')}>
                            <BiCategory />
                        </span>
                        <span className={cx('text')}>Browse Categories</span>
                    </div>
                    <div className={cx('main-list')}>
                        {data.map((item, index) => (
                            <ParentMenu closeModal={setOpen} className={cx('menu')} openMenu={openMenu} setOpenMenu={setOpenMenu} key={index} menuData={item} />
                        ))}
                    </div>
                </div>
                <div className={cx('info')}>
                    <ul>
                        <li>Our location</li>
                        <li>Sign Up</li>
                        <li>Log In</li>
                        <li>(+84) - 2345 - 6789</li>
                    </ul>
                </div>
                <div className={cx('follow')}>
                    <span className={cx('title')}>
                        Follow us
                    </span>
                    <div className={cx('icon')}>
                        <div className={cx('item')} title='Facebook'>
                            <TiSocialFacebook />
                        </div>
                        <div className={cx('item')} title='Twitter'>
                            <IoLogoTwitter />
                        </div>
                        <div className={cx('item')} title='Instagram'>
                            <FaInstagram />
                        </div>
                        <div className={cx('item')} title='PinterestP'>
                            <FaPinterestP />
                        </div>
                        <div className={cx('item')} title='Youtube'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal