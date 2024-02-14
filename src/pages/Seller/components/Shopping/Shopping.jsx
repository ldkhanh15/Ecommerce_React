import React from 'react'
import classNames from 'classnames/bind';
import styles from './styles.module.scss'
import {
    AiOutlineShoppingCart,
    AiOutlineShopping,
    AiOutlineTeam,
    AiOutlineCaretDown,
    AiOutlineCaretUp
} from 'react-icons/ai';
const cx = classNames.bind(styles)
const Shopping = () => {

    return (
        <section className={cx('container')}>
            <div className={cx('item')}>
                <div className={cx(['icon', 'color1'])}>
                    <AiOutlineShoppingCart />
                </div>
                <h1>ONLINE ORDERS</h1>
                <div className={cx('footer')}>
                    <span>12302</span>
                    <span className={cx('up')}><AiOutlineCaretUp /></span>
                    <span>150</span>
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx(['icon', 'color2'])}>
                    <AiOutlineShoppingCart />
                </div>
                <h1>OFFLINE ORDERS</h1>
                <div className={cx('footer')}>
                    <span>12302</span>
                    <span className={cx('down')}><AiOutlineCaretDown /></span>
                    <span>150</span>
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx(['icon', 'color3'])}>
                    <AiOutlineTeam />
                </div>
                <h1>TOTAL USERS</h1>
                <div className={cx('footer')}>
                    <span>122302</span>
                    <span className={cx('up')}><AiOutlineCaretUp /></span>
                    <span>1530</span>
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx(['icon', 'color4'])}>
                    <AiOutlineShopping />
                </div>
                <h1>TOTAL PRODUCTS</h1>
                <div className={cx('footer')}>
                    <span>12302</span>
                    <span className={cx('up')}><AiOutlineCaretUp /></span>
                    <span>150</span>
                </div>
            </div>
        </section>
    )
}
export default Shopping