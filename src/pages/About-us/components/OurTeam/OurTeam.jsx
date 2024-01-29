import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Button from '@/components/Button'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const cx = classNames.bind(styles)
const OurTeam = () => {
    return (
        <div className={cx('container')}>
            <h2>Our Team</h2>
            <div className={cx('main')}>
                <div className={cx('left')}>
                    <span className={cx('our-team')}>Our Team</span>
                    <h3>Meet Our Expert Team</h3>
                    <p>
                        Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        <br />
                        Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                    </p>
                    <Button className={cx('btn')} large primary>View All Members</Button>
                </div>
                <div className={cx('right')}>
                    <div className={cx('item')}>
                        <div className={cx('top')}>
                            <img src="/images/about/about-6.png" alt="" />
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('box')}>
                                <h4>H. Merinda</h4>
                                <span className={cx('desc')}>CEO & Co-Founder</span>
                                <div className={cx('icon')}>
                                    <FaFacebookF />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('top')}>
                            <img src="/images/about/about-8.png" alt="" />
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('box')}>
                                <h4>H. Merinda</h4>
                                <span className={cx('desc')}>CEO & Co-Founder</span>
                                <div className={cx('icon')}>
                                    <FaFacebookF />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam