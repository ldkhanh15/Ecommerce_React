import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const HeaderPageInfo = ({name}) => {
    return (
        <div className={cx('container')}>
            <div className={cx('name')}>
                {name}
            </div>
            <div className={cx('info')}>
                <div className={cx('item')}>
                    By <strong>Khánh</strong>
                </div>
                <div className={cx('item')}>
                    28 January, 2024
                </div>
                <div className={cx('item')}>
                    8 mins read
                </div>
                <div className={cx('item')}>
                    29k Views
                </div>
            </div>
        </div>
    )
}

export default HeaderPageInfo