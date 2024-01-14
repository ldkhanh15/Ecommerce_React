import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'


const cx = classNames.bind(styles)
const Statistical = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('data')}>
                <div className={cx('item')}>
                    <h2>12+</h2>
                    <p>Glorious years</p>
                </div>
                <div className={cx('item')}>
                    <h2>36+</h2>
                    <p>Happy clients</p>
                </div>
                <div className={cx('item')}>
                    <h2>58+</h2>
                    <p>Project completed</p>
                </div>
                <div className={cx('item')}>
                    <h2>24+</h2>
                    <p>Team advisor</p>
                </div>
                <div className={cx('item')}>
                    <h2>26+</h2>
                    <p>Products sale</p>
                </div>
            </div>
        </div>
    )
}

export default Statistical